
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EducadoresService } from "src/app/services/educadores.service";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { Educador } from "src/app/models/educador.model";

@Component({
	selector: 'create-alunos',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})

export class CreateComponent{
    open = true;
    object: Educador = new Educador;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	generos: string[] = [
		'Masculino',
		'Feminino',
		'Outros'
	];
	
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private educadoresService: EducadoresService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
    ){

		// lastValueFrom(this.educadoresService.getListPerfil()).then( res => {
		// 	this.perfis = Object.assign([], res);
		// });
		// lastValueFrom(this.educadoresService.getList())

		
	}

    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['educadores']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		
		console.log(this.object)
		lastValueFrom(this.educadoresService.post(this.object))
			.then(res => {
				if (res.success) {
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.educadoresService.getList())
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
