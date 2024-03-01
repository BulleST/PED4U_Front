
import { Component, ViewChild} from "@angular/core";
import { AlunoService } from "src/app/services/aluno.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Aluno } from "src/app/models/aluno.model";
import { ToastrService } from "ngx-toastr";
import { lastValueFrom } from "rxjs";
import { Perfil } from "src/app/models/perfis.model";
import { DiaSemana, Turma } from "src/app/models/turmas.model";
import { PerfilService } from "src/app/services/perfil.service";
import { TurmasService } from "src/app/services/turmas.service";
import { DatePipe } from '@angular/common';
import { Calendar } from "primeng/calendar";


@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent {
	@ViewChild('calendarDataVigencia') 
	calendar!: Calendar;

	
	open = true;
	aluno: Aluno = new Aluno;
	erro = '';
	loading: boolean = true;
	generos: any[] = [
		{ id: 0, nome: 'Não informado'},
		{ id: 1, nome: 'Masculino'},
		{ id: 2, nome: 'Feminino'},
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
	dataVigencia: [Date, Date] = [new Date, new Date];
	selectedGenero: any;
	

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private alunoService: AlunoService,
		private toastr: ToastrService,
		private perfilService: PerfilService,
		private turmasService: TurmasService,
		private datePipe: DatePipe,
	) {
		this.perfilService.list.subscribe((data) => {
			this.perfis = Object.assign([], data);
		})
		lastValueFrom(perfilService.getList());

		this.turmasService.list.subscribe((data) =>{
			this.turmas = Object.assign([], data)
		})
		lastValueFrom(turmasService.getList());
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.aluno.id = res['id']
				// Abrir modal
				lastValueFrom(this.alunoService.get(this.aluno.id))
					.then(res => {
						this.open = true;
						this.aluno = res;
						this.selectedPerfis = this.perfis.find(perfil => perfil.id == this.aluno.perfil_Id);
						this.selectedTurma = this.turmas.find(turma => turma.id == this.aluno.turma_Id);
						this.selectedGenero = this.generos.find(genero => genero.id == this.aluno.sexo_Id);
						this.aluno.dataNascimento = this.datePipe.transform(this.aluno.dataNascimento, 'dd/MM/yyyy') as string;
						console.log(this.aluno)
						this.dataVigencia[0] = new Date(this.aluno.data_Vigencia_Inicial + " 03:00:00");
						this.dataVigencia[1] = new Date(this.aluno.data_Vigencia_Final + " 03:00:00");
						this.calendar.updateInputfield();
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
		this.aluno.dataNascimento = this.datePipe.transform(this.aluno.dataNascimento, 'yyyy-MM-dd') as string;
		this.aluno.data_Vigencia_Inicial = this.datePipe.transform(this.aluno.data_Vigencia_Inicial, 'yyyy-MM-dd') as unknown as Date;
		this.aluno.data_Vigencia_Final = this.datePipe.transform(this.aluno.data_Vigencia_Final, 'yyyy-MM-dd') as unknown as Date;
		this.aluno.turma_Id = this.selectedTurma?.id as number;
		this.aluno.perfil_Id = this.selectedPerfis?.id as number;
		this.aluno.sexo_Id = this.selectedGenero?.id as number;
		
		console.log('aluno ',this.aluno)
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

	dataVigenciaSelected(event: any){
		console.log(this.dataVigencia)
		this.aluno.data_Vigencia_Inicial = this.dataVigencia[0];
		this.aluno.data_Vigencia_Final = this.dataVigencia[1];
		
		
	}

	checkDate(newDate: any){
		console.log(newDate);
	  }
}