

import { Component, ViewChild } from '@angular/core';
import { Aluno } from './aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'alunos',
    templateUrl: './aluno.component.html',
    styleUrls: ['./aluno.component.css']
  })


  export class AlunoComponent{
    list: Aluno [] = [];
    @ViewChild('dt') dt!: Table;

    constructor(private AlunoService: AlunoService){
      this.AlunoService.list.subscribe((data) =>{
        this.list = Object.assign([], data);
        console.log('lista de apostilas ', data)
        })
        lastValueFrom(AlunoService.getList())
    }

    // Função para limpar os filtros aplicados na tabela
    clear(table: Table) {
      table.clear();
    }

    // Função para filtrar a tabela a partir do input
    applyFilterGlobal(event: any, filterType: string) {
      this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
    }

    getValue(value: boolean){
      switch (value){
        case true:
          return 'Ativo';
        case false:
          return 'Inativo';
      }
    }
  
    getSeverity(status: boolean){
      switch (status){
        case true:
          return 'success';
        case false:
          return 'danger';
      }
    }
  }