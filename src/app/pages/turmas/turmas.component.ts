

import { Component, ViewChild } from '@angular/core';
import { Turma, DiaSemana } from 'src/app/models/turmas.model';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { TurmasService } from 'src/app/services/turmas.service';
import { LoadingService } from 'src/app/parts/loading/loading';

@Component({
  selector: 'turma',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent {
  list: Turma[] = [];
  @ViewChild('dt') dt!: Table;
  diaSemanaList: DiaSemana [] = [
		{id: 1 , nome: 'Segunda-Feira'},
		{id: 2 , nome: 'Terça-Feira'},
		{id: 3 , nome: 'Quarta-Feira'},
		{id: 4 , nome: 'Quinta-Feira'},
		{id: 5 , nome: 'Sexta-Feira'},
		{id: 6 , nome: 'Sábado'}
	  ];
    loading: boolean = false;

  constructor(
    private turmasService: TurmasService,
    private loadingHelper: LoadingService
    ){
      this.loadingHelper.loading.subscribe(res => this.loading = res);

      this.turmasService.list.subscribe((data) =>{
        this.list = Object.assign([], data);
        console.log('lista de turmas ', data)
        this.list.forEach( turma => {
          turma.diaSemanaTxt = this.getDiaSemana(turma.diaSemana)
        })
      })
      
      this.loadingHelper.loading.next(true);

      lastValueFrom(turmasService.getList())
      this.loadingHelper.loading.next(false);
  }

  // Função para limpar os filtros aplicados na tabela
  clear(table: Table) {
    table.clear();
  }

  // Função para filtrar a tabela a partir do input
  applyFilterGlobal(event: any, filterType: string) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
  }

  getDiaSemana(diaSemana_id:number): string{
    let diaSemana = this.diaSemanaList.find(x => x.id == diaSemana_id)
    if(diaSemana == null) return '';
    else return diaSemana.nome;
  }

}

