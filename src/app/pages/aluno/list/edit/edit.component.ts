
import { Component } from "@angular/core";
import { AlunoService } from "src/app/services/aluno.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Aluno, AlunoList } from "src/app/models/aluno.model";
import { ToastrService } from "ngx-toastr";
import { lastValueFrom } from "rxjs";
import { Perfil } from "src/app/models/perfis.model";
import { DiaSemana, Turma } from "src/app/models/turmas.model";


@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent {
	open = true;
	aluno: Aluno = new Aluno;
	erro = '';
	loading: boolean = true;
	generos: string[] = [
		'Masculino',
		'Feminino',
		'Outros'
	];
	vigencia: string [] = [
		'Ativo',
		'Inativo'
	];
	diaSemanaList: DiaSemana [] = [
		{id: 1 , nome: 'Segunda-Feira'},
		{id: 2 , nome: 'Terça-Feira'},
		{id: 3 , nome: 'Quarta-Feira'},
		{id: 4 , nome: 'Quinta-Feira'},
		{id: 5 , nome: 'Sexta-Feira'},
		{id: 6 , nome: 'Sábado'}
	  ];
	perfis: Perfil [] = [];
	turmas: Turma [] = [];
	selectedPerfis?: Perfil = new Perfil;
	selectedTurma?: Turma = new Turma;
	

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private alunoService: AlunoService,
		private toastr: ToastrService
	) {
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.aluno.id = res['id']
				// Abrir modal
				lastValueFrom(this.alunoService.post(this.aluno))
					.then(res => {
						this.open = true;
						this.loading = false;
					}).catch(res => {
						this.close();
						this.toastr.error('Não foi possível acessar essa página')
					})
			}
			else {
				this.close();
				this.toastr.error('Não foi possível acessar essa página')
			}
			console.log(res)
		})
	}

	// Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['aluno']);
		return;
	}

	send() {
		this.loading = true;
		this.aluno.turma_Id = this.selectedTurma?.id as number;
		this.aluno.perfil_Id = this.selectedPerfis?.id as number;
		lastValueFrom(this.alunoService.post(this.aluno))
			.then(res => {

				if (res.success) {
					lastValueFrom(this.alunoService.getList())
					this.close()
					this.toastr.success('Operação concluída com sucesso')
				}
				else {
					this.erro = res.message
					this.toastr.error(res.message)
				}

				this.loading = false;
			})
			.catch(res => {
				this.erro = res;

				console.error("console error" + res);
			})
			.finally(() => {
				this.loading = false;
			})
	}

	getTurmaNome(turma: Turma){
		let diaSemanaTxt = this.getDiaSemana(turma.diaSemana);
		let turmaNome = turma.nomeEducador + ' ' + diaSemanaTxt + ' ' + turma.horario;
		return turmaNome;	
	}

	getDiaSemana(diaSemana_id:number): string{
		let diaSemana = this.diaSemanaList.find(x => x.id == diaSemana_id)
		if(diaSemana == null) return '';
		else return diaSemana.nome;
	}

}