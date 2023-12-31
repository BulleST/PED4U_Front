
import { Component } from "@angular/core";
import { AlunoTesteService } from "src/app/services/aluno-teste.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Aluno } from "../../aluno.model";
import { ToastrService } from "ngx-toastr";
import { lastValueFrom } from "rxjs";
import { PerfilAluno } from "../../aluno.model";

@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent {
	open = true;
	object: Aluno = new Aluno;
	erro = '';
	loading: boolean = true;
	generos: string[] = [
		'Masculino',
		'Feminino',
		'Outros'
	];
	vigencia: string [] = [
		'Ativo',
		'Inativo'
	];
	perfis: object [] = [
		{
			id: 2,
			nome: '80+'
		}
	];
	perfil: PerfilAluno = new PerfilAluno;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private alunoTesteService: AlunoTesteService,
		private toastr: ToastrService
	) {
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.object.id = res['id']
				// Abrir modal
				lastValueFrom(this.alunoTesteService.get(this.object.id))
					.then(res => {
						this.open = true;
						this.object = res;
						this.loading = false;
						console.log(res)
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
		this.router.navigate(['aluno']);
		return;
	}

	send() {
		this.loading = true;
		lastValueFrom(this.alunoTesteService.edit(this.object))
			.then(res => {
				if (res.success) {
					lastValueFrom(this.alunoTesteService.getList())
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
