

import { ApostilasService } from './../../../services/apostilas.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApostilaAbaco } from '../apostilas-abaco.model';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';

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
	loading: boolean = false;
	private loadingSpinner: boolean = false;
	

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private apostilasService: ApostilasService,
		private toastr: ToastrService,
		private http: HttpClient
    ){}
	// ngOnInit(){
	// 	this.http.post<any>('https://reqres.in/api/posts', {title: 'teste'}).subscribe(data => {
	// 		this.post = data.id;
	// 	})
	// }


    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['apostilas-abaco']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		console.log(this.abaco)
		lastValueFrom(this.apostilasService.post(this.abaco))
			.then(res => {
					this.close();

				})
			.catch(res => {
				this.erro = res;
				console.error("console catch" + res);
			})
			.finally(() => {
				this.loading = false;
			})
	}

	// send(){
	// 	lastValueFrom(this.apostilasService.getList()).then ( res => {
	// 		this.apostilas = Object.assign([], res);
	// 		console.log(res)

	// 	})
	// }

		getList(){
			this.loading = true;
			lastValueFrom(this.apostilasService.get(this.id))
			// .then(res =>{
			// 	if(res.success){
			// 		this.close()
			// 		this.toastr.success('Operação concluída com sucesso')
			// 	}
			// 	else{
			// 		this.erro = res.message
			// 		this.toastr.error(res.message)
			// 	}
		}

		setLoadingSpinner(loadingSpinner: boolean) {
			this.loadingSpinner = loadingSpinner;
		  }
		  getLoadingSpinner(): boolean {
			return this.loadingSpinner;
		  }

	}
