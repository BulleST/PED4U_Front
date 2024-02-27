import { PerfilService } from './../../../../services/perfil.service';
import { AlunoService } from "src/app/services/aluno.service";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Aluno} from "src/app/models/aluno.model";
import { Perfil } from "src/app/models/perfis.model";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { TurmasService } from 'src/app/services/turmas.service';
import { DiaSemana, Turma } from 'src/app/models/turmas.model';
import { DatePipe } from '@angular/common';




@Component({
	selector: 'create-alunos',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})

export class CreateComponent{
    open = true;
    aluno: Aluno = new Aluno;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	generos: any[] = [
		{ id: 0, nome: 'Não informado'},
		{ id: 1, nome: 'Masculino'},
		{ id: 2, nome: 'Feminino'},
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
	selectedTurma?: Turma = new Turma;
	selectedPerfis?: Perfil = new Perfil;
	datavigencia: [Date, Date] = [new Date, new Date];
	selectedGenero: any;
	

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private alunoService: AlunoService,
		private toastr: ToastrService,
		private http: HttpClient,
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
	}

	// Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['aluno']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	 save() {
		 this.loading = true;
		 this.aluno.dataNascimento = this.datePipe.transform(this.aluno.dataNascimento, 'yyyy-MM-dd') as string;
		 this.aluno.data_Vigencia_Inicial = this.datePipe.transform(this.aluno.data_Vigencia_Inicial, 'yyyy-MM-dd') as unknown as Date;
		 this.aluno.data_Vigencia_Final = this.datePipe.transform(this.aluno.data_Vigencia_Final, 'yyyy-MM-dd') as unknown as Date;
		 this.aluno.turma_Id = this.selectedTurma?.id as number;
		 this.aluno.perfil_Id = this.selectedPerfis?.id as number;
		 this.aluno.sexo_Id = this.selectedGenero?.id as number;
		 console.log('aluno ',this.aluno)
		 if (this.selectedPerfis == undefined) {
			 return

		 }
		 this.erro = 'Selecione um perfil'
		 if (this.selectedTurma == undefined) {
			 return

		 }
		 if (this.selectedGenero == undefined) {
			return

		}
		 this.erro = 'Selecione uma turma';
		lastValueFrom(this.alunoService.post(this.aluno))
			.then(res => {
				if (res.success) {
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.alunoService.getList())
				}
				else {
					this.erro = res.message
					this.toastr.error(res.message)
				}
					this.loading = false;
			})
			.catch(res => {
				this.erro = res;
				console.error("console catch" + res);
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
		this.aluno.data_Vigencia_Inicial = this.datavigencia[0];
		this.aluno.data_Vigencia_Final = this.datavigencia[1];
	}
	
	formatTime(horario: string): string{
		// receive timetable in this format "hh:mm";
		// then change the time to 'hh:mm:ss'
		if(horario.length == 5)
			return horario + ':00.000000' 
		else if(horario.length == 8)
			return horario + '.000000' 
		else 
			return horario
	}

}