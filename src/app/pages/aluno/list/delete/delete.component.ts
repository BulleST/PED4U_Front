
import { Component } from "@angular/core";
import { AlunoList } from "src/app/models/aluno.model";
import { ActivatedRoute, Router } from "@angular/router";
import { AlunoService } from "src/app/services/aluno.service";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component ({
    selector: 'delete-alunos',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.css']
})

export class DeleteComponent{
	open = true;
	object: AlunoList = new AlunoList;
	id: number = 0;
	erro = '';
	loading: boolean = false;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private alunoService: AlunoService,
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

		lastValueFrom(this.alunoService.delete(this.id))
			.then(res => {
				if (res.success) {
					lastValueFrom(this.alunoService.getList())
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

   
