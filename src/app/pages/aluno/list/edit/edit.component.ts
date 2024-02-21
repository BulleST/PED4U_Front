
import { Component } from "@angular/core";
import { AlunoService } from "src/app/services/aluno.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Aluno, AlunoList } from "src/app/models/aluno.model";
import { ToastrService } from "ngx-toastr";
import { lastValueFrom } from "rxjs";
import { Perfil } from "src/app/models/perfis.model";


@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent {
	open = true;
	aluno: Aluno = new Aluno;
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
	perfis: Perfil [] = [
		{
			id: 2,
			nome: '80+'
		}
	];
	

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private alunoService: AlunoService,
		private toastr: ToastrService
	) {
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.aluno.id = res['id']
				// Abrir modal
				lastValueFrom(this.alunoService.get(this.aluno.id))
					.then(res => {
						this.open = true;
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
		this.router.navigate(['aluno']);
		return;
	}

	send() {
		this.loading = true;
		lastValueFrom(this.alunoService.post(this.aluno))
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