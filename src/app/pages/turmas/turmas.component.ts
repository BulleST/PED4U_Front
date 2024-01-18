

import { Component, ViewChild } from '@angular/core';
import { Turma } from './turmas.model';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { TurmasService } from 'src/app/services/turmas.service';

@Component({
  selector: 'turma',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent {
  list: Turma[] = [];
  @ViewChild('dt') dt!: Table;

  constructor(private turmasService: TurmasService){
    this.turmasService.list.subscribe((data) =>{
      this.list = Object.assign([], data);
      console.log('lista de apostilas ', data)
      })
      lastValueFrom(turmasService.getList())
  }

  // Função para limpar os filtros aplicados na tabela
  clear(table: Table) {
    table.clear();
  }

  // Função para filtrar a tabela a partir do input
  applyFilterGlobal(event: any, filterType: string) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
  }

}

