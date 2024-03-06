
import { AulasService } from "src/app/services/aulas.service";
import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { AlunoAula } from "src/app/models/aulas.model";
import { Table } from 'primeng/table';
import { TurmaAula } from "src/app/models/turmas.model";

@Component({
	selector: 'lancar_aulas',
	templateUrl: './lancar_aula.component.html',
	styleUrls: ['./lancar_aula.component.css']
})

export class LancarAula{
	@ViewChild('dt') dt!: Table;
    open = true;
    object: AlunoAula = new AlunoAula;
    id: number = 0;
	erro = '';
	list: AlunoAula[] = [];
	loading: boolean = false;
	turma_id: number = 0
	aulas: TurmaAula[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private aulasService: AulasService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
    ){
		this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.turma_id = res['id']
				lastValueFrom(this.aulasService.getListAula(this.turma_id)).then( res => {
					this.aulas = Object.assign([], res);
				});
			}	else {
				this.close();
				this.toastr.error('Não foi possível acessar essa página')
			}
		})
		
		
		

		
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

	clear(table: Table) {
		table.clear();
	  }

	applyFilterGlobal(event: any, filterType: string) {
	this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
	}
	
}
