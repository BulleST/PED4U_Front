import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AulasService } from "src/app/services/aulas.service";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { AulaCadastro, AulaCadastroBody } from "src/app/models/aulas.model";
import { Educador } from "src/app/models/educador.model";
import { EducadoresService } from "src/app/services/educadores.service";
import { lastValueFrom } from "rxjs";

@Component({
	selector: 'create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})

export class CreateAulaComponent{
    open = true;
    id: number = 0;
	erro = '';
	loading: boolean = false;
    aula: AulaCadastro = new AulaCadastro;
	educadores: Educador [] = [];
	selectedEducadores: Educador = { id: -1, name: '', email: ''};
	selectHorario: string = '';
	


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private aulasService: AulasService,
		private educadoresService: EducadoresService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
    ){

		this.activatedRoute.parent?.params.subscribe(res => {
			console.log(res)
			if (res['turma_id']) {
				this.aula.turma_Id = res['turma_id']

				this.educadoresService.list.subscribe((data) =>{
					this.educadores = Object.assign([], data);
				})

				this.save();
				lastValueFrom(educadoresService.getList()).then( res => {
					console.log(this.educadores)
		
				})
			}	else {
				this.close();
				this.toastr.error('Não foi possível acessar essa página')
			}
	
		})
	}


     // Fechar modal e retornar para rota 
	close(): void {
		this.router.navigate(['..'], {relativeTo: this.activatedRoute});
		return;
	}

	
	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		console.log(this.aula.data)
		
		// if(this.selectedEducadores.id == -1){
		// 	this.erro = "Selecione um Educador válido";
		// 	return;
		// } 
		this.aula.educador_Id = this.selectedEducadores.id;
		let body: AulaCadastroBody = new AulaCadastroBody;
		// body recebe a informação de aula
		body.aula = this.aula;
		lastValueFrom(this.aulasService.post(body))
			.then(res => {
				if (res.success) {
					console.log(res)
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.aulasService.getListAula(this.aula.turma_Id))
					
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

}