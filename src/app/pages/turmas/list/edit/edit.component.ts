

import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { DiaSemana, Turma } from "src/app/models/turmas.model";
import { Perfil } from "src/app/models/perfis.model";
import { TurmasService } from "src/app/services/turmas.service";
import { PerfilService } from "src/app/services/perfil.service";
import { TurmaCadastro } from "src/app/models/turmas.model";
import { Educador } from "src/app/models/educador.model";
import { TurmaPerfilRel } from "src/app/models/turmas.model";

@Component({
	selector: 'edit-alunos',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent{
    open = true;
    object: TurmaCadastro = new TurmaCadastro;
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
	  educadores: Educador [] = [
		{id: 1, name: 'Lucas', email: ''},
		{id: 2, name: 'Marina', email: ''},
		{id: 3, name: 'Luana', email: ''},
		{id: 4, name: 'Antônio', email: ''},
		{id: 5, name: 'Letícia', email: ''},
	  ];
	  selectedPerfis: number[] = [];
	  selectedDiaSemana?: DiaSemana = {id: -1 , nome: ''};
	  selectedEducadores?: Educador = { id: -1, name: '', email: ''};
	  selectHorario: string = '';
	
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private turmasService: TurmasService,
		private toastr: ToastrService,
		private perfilService: PerfilService
    ){
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.object.id = res['id']
				// Abrir modal
				lastValueFrom(this.turmasService.get(this.object.id))
					.then(res => {
						this.open = true;
						this.object = res;
						this.selectedDiaSemana = this.diaSemana.find(x => x.id == this.object.diaSemana)
						this.selectedEducadores = this.educadores.find(x => x.id == this.object.educador_Id)
						console.log(this.object.educador_Id)
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
		})
		

		this.perfilService.list.subscribe((data) => {
			this.perfis = Object.assign([], data);
			
		  })
		  lastValueFrom(perfilService.getList())
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
		this.object.horario = this.formatTime(this.selectHorario)
		if(!this.selectedDiaSemana){
			this.erro = "Selecione um dia da Semana válido";
			return;
		} 
		this.object.diaSemana = this.selectedDiaSemana.id;
		if(!this.selectedEducadores){
			this.erro = "Selecione um Educador válido";
			return;
		} 
		this.object.educador_Id = this.selectedEducadores? this.selectedEducadores.id : 0;
		this.object.qtdeMaxAlunos = parseInt(this.object.qtdeMaxAlunos.toString())
		this.object.unidade_Id = 0;
		console.log(this.object)
		lastValueFrom(this.turmasService.post(this.object))
			.then(res => {
				console.log(res)
				if (res.success) {
					let turma_id:number = parseInt(res.object? res.object : "0");
					if(turma_id != 0){
						// Caso recebemos a turma id, vamos inserir os perfis para cada turma
						this.sendPerfil(turma_id)
					}

					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.turmasService.getList())
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
		return horario + ':00.000000' 
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

	  sendPerfil(turma_id: number){
		this.selectedPerfis.forEach(perfil_id => {
			let rel:TurmaPerfilRel = new TurmaPerfilRel();
			rel.turma_Id = turma_id;
			rel.perfil_Id = perfil_id;
			console.log(rel)
			lastValueFrom(this.turmasService.postTurmaPerfilRel(rel))
		});
	  }

}


