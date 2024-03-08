import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AulasService } from "src/app/services/aulas.service";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { AulaCadastro, AulaCadastroBody } from "src/app/models/aulas.model";
import { Educador } from "src/app/models/educador.model";
import { EducadoresService } from "src/app/services/educadores.service";
import { lastValueFrom } from "rxjs";

@Component({
	selector: 'create',
	templateUrl: './listagem-alunos.component.html',
	styleUrls: ['./listagem-alunos.component.css']
})

export class ListagemAlunos{
	@ViewChild('dt') dt!: Table;
    open = true;
    aluno: AlunoAula = new AlunoAula;
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
					console.log(data)
				  })
				lastValueFrom(this.aulasService.getListAula(this.turma_id)).then
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

	formatDate(value: string) {
		const datePipe: DatePipe = new DatePipe('en-US')
		let date = new Date(value)
		console.log(value)
		return datePipe.transform(date, 'dd/MM/YYYY')
	}

	clear(table: Table) {
		table.clear();
	}

	applyFilterGlobal(event: any, filterType: string) {
		this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
	}
}