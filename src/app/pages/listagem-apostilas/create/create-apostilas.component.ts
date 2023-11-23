

import { ApostilasService } from './../../../services/apostilas.service';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApostilaAbaco } from '../apostilas-abaco.model';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from "ngx-toastr";

@Component({
	selector: 'create-apostilas',
	templateUrl: './create-apostilas.component.html',
	styleUrls: ['./create-apostilas.component.css']
})

export class CreateApostilasComponent{
    open = true;
    abaco: ApostilaAbaco = new ApostilaAbaco;
	id: number = 0;
	erro = '';
	loading: boolean = true;
	

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private apostilasService: ApostilasService,
		private toastr: ToastrService
    ){
		this.activatedRoute.params.subscribe(res =>{
			if(res ['ApostilaAbaco_id']){
				this.id = res['ApostilaAbaco_id']
				// Abrir modal
				this.open = true
			}
			else{
				this.close()
				this.toastr.error('Não foi possível acessar essa página')
			}
			console.log(res)
		})
	}

    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['apostilas-abaco']);
		return;
	}

	send(){
		lastValueFrom(this.apostilasService.post(this.abaco)).then
	}

}