

import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { DiaSemana, Turma } from "src/app/models/turmas.model";
import { Perfil } from "src/app/models/perfis.model";
import { TurmasService } from "src/app/services/turmas.service";
import { PerfilService } from "src/app/services/perfil.service";
import { TurmaCadastro } from "src/app/models/turmas.model";
import { Educador } from "src/app/models/educador.model";
import { EducadoresService } from "src/app/services/educadores.service";

@Component({
	selector: 'edit-alunos',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent{
    open = true;
    turma: TurmaCadastro = new TurmaCadastro;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	perfis: Perfil [] = [];
	diaSemana: DiaSemana [] = [
		{id: 1 , nome: 'Segunda-Feira'},
		{id: 2 , nome: 'Terça-Feira'},
		{id: 3 , nome: 'Quarta-Feira'},
		{id: 4 , nome: 'Quinta-Feira'},
		{id: 5 , nome: 'Sexta-Feira'},
		{id: 6 , nome: 'Sábado'}
	  ];
	  educadores: Educador [] = [];
	  selectedPerfis: Perfil[] = [];
	  selectedDiaSemana?: DiaSemana = {id: -1 , nome: ''};
	  selectedEducadores?: Educador = { id: -1, name: '', email: ''};
	  selectHorario: string = '';


	
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private turmasService: TurmasService,
		private toastr: ToastrService,
		private perfilService: PerfilService,
		private educadoresService: EducadoresService
    ){
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.turma.id = res['id']

				this.perfilService.list.subscribe((data) => {
					this.perfis = Object.assign([], data);
				})
				this.educadoresService.list.subscribe((data) =>{
					this.educadores = Object.assign([], data);
				})
				lastValueFrom(perfilService.getList()).then(res =>{
					lastValueFrom(educadoresService.getList()).then( res => {

						lastValueFrom(this.turmasService.get(this.turma.id)).then(res => {
							this.open = true;
							this.turma = res;
							this.selectedDiaSemana = this.diaSemana.find(x => x.id == this.turma.diaSemana);
							this.selectedEducadores = this.educadores.find(x => x.id == this.turma.educador_Id);
							this.selectHorario = this.turma.horario;
							
							this.perfis.forEach(perfil => {
								if(this.turma.perfis == null)
									return
								if(this.turma.perfis.find(x => x == perfil.id) != null){
									this.selectedPerfis.push(perfil)
								}
							});
							console.log(this.turma)
							this.loading = false;
						}).catch(res => {
							this.close();
							this.toastr.error('Não foi possível acessar essa página')
						})
					})
				})
			}
			else {
				this.close();
				this.toastr.error('Não foi possível acessar essa página')
			}
		})
	}

    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['turmas']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		this.turma.horario = this.formatTime(this.selectHorario)
		if(!this.selectedDiaSemana){
			this.erro = "Selecione um dia da Semana válido";
			return;
		} 
		this.turma.diaSemana = this.selectedDiaSemana.id;
		if(!this.selectedEducadores){
			console.log(this.selectedEducadores)
			this.erro = "Selecione um Educador válido";
			return;
		} 
		this.turma.educador_Id = this.selectedEducadores? this.selectedEducadores.id : 0;
		this.turma.qtdeMaxAlunos = parseInt(this.turma.qtdeMaxAlunos.toString())
		this.turma.unidade_Id = 0;
		this.turma.perfis = []
		this.selectedPerfis.forEach(perfil =>{
			this.turma.perfis.push(perfil.id)
		})
		console.log(this.turma)
		lastValueFrom(this.turmasService.post(this.turma))
			.then(async res => {
				console.log(res)
				if (res.success) {
					lastValueFrom(this.turmasService.getList())

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
				console.error("console catch" + res);
			})
			.finally(() => {
				this.loading = false;
			})
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

	concatenatePerfil(perfis: string[]): string{
		let result: string = '';
		
		for(let i = 0; i < perfis.length; i++){
		  result += perfis[i]
		  if(i != perfis.length-1){
			result += ', '
		  }
		   
		}
		return result
	  }

	
		


}


