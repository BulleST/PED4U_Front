import { Component } from "@angular/core";
import { ApostilasService } from '../../../../services/apostilas.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ApostilaAbaco } from "src/app/models/abaco.model";
import { ToastrService } from "ngx-toastr";
import { lastValueFrom } from "rxjs";

@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent {
	open = true;
	object: ApostilaAbaco = new ApostilaAbaco;
	erro = '';
	loading: boolean = true;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private apostilasService: ApostilasService,
		private toastr: ToastrService
	) {
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.object.id = res['id']
				// Abrir modal
				lastValueFrom(this.apostilasService.get(this.object.id))
					.then(res => {
						this.open = true;
						this.object = res;
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
			console.log(res)
		})
	}

	// Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['abaco']);
		return;
	}

	send() {
		this.loading = true;
		lastValueFrom(this.apostilasService.post(this.object))
			.then(res => {

				if (res.success) {
					lastValueFrom(this.apostilasService.getList())
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

				console.error("console error" + res);
			})
			.finally(() => {
				this.loading = false;
			})
	}

}
