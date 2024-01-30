
import { AulasService } from "src/app/services/aulas.service";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { AlunoAula } from "src/app/models/aulas.model";

@Component({
	selector: 'create-aulas',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})

export class CreateComponent{
    open = true;
    object: AlunoAula = new AlunoAula;
    id: number = 0;
	erro = '';
	loading: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private aulasService: AulasService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
    ){

		// lastValueFrom(this.aulasService.getList()).then( res => {
		// 	this.Aulas = Object.assign([], res);
		// });
		lastValueFrom(this.aulasService.getList())

		
	}

    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['aulas']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		
		console.log(this.object)
		lastValueFrom(this.aulasService.post(this.object))
			.then(res => {
				if (res.success) {
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.aulasService.getList())
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
