import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AulasService } from "src/app/services/aulas.service";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from "rxjs";
import { AulaCadastro } from "src/app/models/aulas.model";

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
    turmaAula: AulaCadastro = new AulaCadastro;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private aulasService: AulasService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
    ){

		// lastValueFrom(this.aulasService.getList()).then( res => {
		// 	this.Aulas = Object.assign([], res);
		// });
		lastValueFrom(this.aulasService.getList())

		
	}






     // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['aulas']);
		return;
	}
}