
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EducadoresService } from 'src/app/services/educadores.service';
import { Educador } from "src/app/models/educador.model";
import { ToastrService } from "ngx-toastr";
import { lastValueFrom } from "rxjs";


@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent {
	open = true;
	object: Educador = new Educador;
	erro = '';
	loading: boolean = true;
	generos: string[] = [
		'Masculino',
		'Feminino',
		'Outros'
	];


	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private educadoresService: EducadoresService,
		private toastr: ToastrService
	) {
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.object.id = res['id']
				// Abrir modal
				lastValueFrom(this.educadoresService.get(this.object.id))
					.then(res => {
						this.open = true;
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
		this.router.navigate(['educadores']);
		return;
	}
	// Função criada para salvar as informações inseridas na modal de cadastro
	save() {
		this.loading = true;
		lastValueFrom(this.educadoresService.post(this.object))
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