import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AulasService } from "src/app/services/aulas.service";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { AulaCadastro, AulaCadastroBody } from "src/app/models/aulas.model";
import { Educador } from "src/app/models/educador.model";
import { EducadoresService } from "src/app/services/educadores.service";
import { lastValueFrom } from "rxjs";
import { AlunoAulaListagem } from "src/app/models/aluno.model";
import { TurmasService } from "src/app/services/turmas.service";
import { DatePipe } from "@angular/common";

@Component({
	selector: 'create',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent{
    open = true;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	list: AlunoAulaListagem[] = [];
    aula: AulaCadastro = new AulaCadastro;
	educadores: Educador [] = [];
	selectedEducadores?: Educador;
	selectHorario: string = '';
	turma_id: number = 0;
	selectedData: Date = new Date();
	
	


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private aulasService: AulasService,
		private educadoresService: EducadoresService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
		private turmaService: TurmasService,
		private datePipe: DatePipe
    ){

		this.activatedRoute.parent?.params.subscribe(res => {
			console.log(res)
			if (res['turma_id']) {
				this.aula.turma_Id = parseInt(res['turma_id'])

				lastValueFrom(this.turmaService.get(this.turma_id))
				.then(res => {
					this.aula.educador_Id = res.educador_Id
				})
				this.educadoresService.list.subscribe((data) =>{
					this.educadores = Object.assign([], data);
				})

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
		if (this.selectedEducadores){
			this.aula.educador_Id = this.selectedEducadores?.id;
		}
		this.aula.data = this.datePipe.transform(this.selectedData, "yyyy-MM-ddThh:mm:ss") as string;
		this.aula.data = this.aula.data + "Z";
		console.log(this.aula.data);
		let body: AulaCadastroBody = new AulaCadastroBody;
		// body recebe a informação de aula
		body.aula = this.aula;
		lastValueFrom(this.aulasService.post(body))
			.then(res => {
				if (res.success) {
					console.log(body)
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