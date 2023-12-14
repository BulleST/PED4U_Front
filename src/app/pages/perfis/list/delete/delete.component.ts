
import { Component } from "@angular/core";
import { Perfis } from "../../perfis.model";
import { ActivatedRoute, Router } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { PerfisService } from "src/app/services/perfis.service";

@Component ({
    selector: 'delete-alunos',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.css']
})

export class DeleteComponent{
	open = true;
	object: Perfis = new Perfis;
	id: number = 0;
	erro = '';
	loading: boolean = false;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private perfisService: PerfisService,
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
		this.router.navigate(['perfis']);
		return;
	}
	delete() {
		this.loading = true;

		lastValueFrom(this.perfisService.delete(this.id))
			.then(res => {
				if (res.success) {
					lastValueFrom(this.perfisService.getList())
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

   
