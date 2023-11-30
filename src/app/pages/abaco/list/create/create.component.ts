

import { ApostilasService } from '../../../../services/apostilas.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApostilaAbaco } from '../../abaco.model';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'create-apostilas',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})

export class CreateComponent {
	open = true;
	object: ApostilaAbaco = new ApostilaAbaco;
	id: number = 0;
	erro = '';
	loading: boolean = false;



	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private apostilasService: ApostilasService,
		private toastr: ToastrService,
		private http: HttpClient
	) { }

	// Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['abaco']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		console.log(this.object)
		lastValueFrom(this.apostilasService.post(this.object))
			.then(res => {
				if (res.success) {
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.apostilasService.getList())
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
}
