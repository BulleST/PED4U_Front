import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AulasService } from "src/app/services/aulas.service";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { AulaCadastro } from "src/app/models/aulas.model";
import { Educador } from "src/app/models/educador.model";
import { EducadoresService } from "src/app/services/educadores.service";

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
	selectedEducadores?: Educador = { id: -1, name: '', email: ''};
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
				this.educadoresService.list.subscribe((data) => {
					this.educadores = Object.assign([], data);
				})

				
			}	else {
				this.close();
				this.toastr.error('Não foi possível acessar essa página')
			}
			
		})

	}



     // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['aulas']);
		return;
	}
}