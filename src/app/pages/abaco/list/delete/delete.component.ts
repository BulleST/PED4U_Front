import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApostilasService } from "src/app/services/apostilas.service";
import { ApostilaAbaco } from "../../abaco.model";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
	selector: 'delete-apostilas',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.css']
})

export class DeleteComponent {
	open = true;
	abaco: ApostilaAbaco = new ApostilaAbaco;
	id: number = 0;
	erro = '';
	loading: boolean = false;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private apostilasService: ApostilasService,
		private toastr: ToastrService
	) {
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.id = res['id']
				// Abrir modal
				this.open = true
			}
			else {
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

	delete() {
		this.loading = true;

		lastValueFrom(this.apostilasService.delete(this.id))
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
			}).catch(res => {
				this.erro = res;
				console.error("console catch" + res);
			})
			.finally(() => {
				this.loading = false;
			})

	}
}