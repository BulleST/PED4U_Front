
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { Perfis } from "../../perfis.modal";
import { PerfisService } from "src/app/services/perfis.service";

@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent{
    open = true;
    object: Perfis = new Perfis;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private perfisService: PerfisService,
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
		this.router.navigate(['perfis']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		
		console.log(this.object)
		lastValueFrom(this.perfisService.post(this.object))
			.then(res => {
				if (res.success) {
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.perfisService.getList())
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
