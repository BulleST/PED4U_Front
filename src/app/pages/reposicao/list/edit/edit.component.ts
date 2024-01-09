
import { ReposicaoService } from "src/app/services/reposicao.service";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { ReposicaoAlunos } from "src/app/models/reposicao.model";
import { Perfil } from "src/app/pages/perfis/perfis.model";

@Component({
	selector: 'edit-reposicao',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent{
    open = true;
    object: ReposicaoAlunos = new ReposicaoAlunos;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	perfis: Perfil [] = [];
	diaTurma: string [] = [
		'Segunda-Feira',
		'Terça-Feira',
		'Quarta-Feira',
		'Quinta-Feira',
		'Sexta-Feira',
		'Sábado'
	  ];
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private reposicaoService: ReposicaoService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
    ){

		// lastValueFrom(this.aulasService.getList()).then( res => {
		// 	this.Aulas = Object.assign([], res);
		// });
		lastValueFrom(this.reposicaoService.getList())

		
	}

    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['reposicao']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		
		console.log(this.object)
		lastValueFrom(this.reposicaoService.post(this.object))
			.then(res => {
				if (res.success) {
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.reposicaoService.getList())
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
