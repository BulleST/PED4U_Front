
import { Component } from "@angular/core";
import { Educador } from "src/app/models/educador.model";
import { ActivatedRoute, Router } from "@angular/router";
import { EducadoresService } from "src/app/services/educadores.service";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component ({
    selector: 'delete-alunos',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.css']
})

export class DeleteComponent{
	open = true;
	id: number = 0;
	erro = '';
	loading: boolean = false;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private educadoresService: EducadoresService,
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
		this.router.navigate(['educadores']);
		return;
	}

	delete() {
		this.loading = true;

		lastValueFrom(this.educadoresService.delete(this.id))
			.then(res => {

				if (res.success) {
					lastValueFrom(this.educadoresService.getList())
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

   