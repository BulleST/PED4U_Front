
import { AulasService } from "src/app/services/aulas.service";
import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { AlunoAula } from "src/app/models/aulas.model";
import { Table } from 'primeng/table';
import { TurmaAula } from "src/app/models/turmas.model";
import { DatePipe } from '@angular/common';

@Component({
	selector: 'lancar_aulas',
	templateUrl: './lancar-aula.component.html',
	styleUrls: ['./lancar-aula.component.css']
})

export class LancarAula{
	@ViewChild('dt') dt!: Table;
    open = true;
    object: AlunoAula = new AlunoAula;
    id: number = 0;
	erro = '';
	list: TurmaAula[] = [];
	loading: boolean = false;
	turma_id: number = 0
	

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private aulasService: AulasService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
    ){
		this.activatedRoute.params.subscribe(res => {
			if (res['turma_id']) {
				this.turma_id = res['turma_id']
				
				
				this.aulasService.listTurma.subscribe((data) => {
					this.list = Object.assign([], data);
					
				  })
				lastValueFrom(this.aulasService.getListAula(this.turma_id)).then  (res => {
					console.log(res)
					console.log('estou no then')
				})
				
			}	else {
				this.close();
				this.toastr.error('Não foi possível acessar essa página')
			}
		})		
	}

	// Fechar modal e retornar para rota de aulas
	close(): void {
		this.open = false;
		this.router.navigate(['aulas']);
		return;
	}

	formatDate(value: string) {
		const datePipe: DatePipe = new DatePipe('en-US')
		let date = new Date(value)
		return datePipe.transform(date, 'dd/MM/YYYY')
	}

	clear(table: Table) {
		table.clear();
	}

	applyFilterGlobal(event: any, filterType: string) {
		this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
	}
	
}
