import { Component, ViewChild } from '@angular/core';
import { Alunos } from './alunos.model';
import { AlunosService } from 'src/app/services/alunos.service';
import { Table } from 'primeng/table';

@Component({
    selector: 'alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.css']
  })


  export class AlunosComponent{
    listAlunos: Alunos[] = [];
    @ViewChild('dt') dt!: Table;

    constructor(private alunosservice: AlunosService){
      this.alunosservice.listAlunos.subscribe((data) => {
        this.listAlunos = Object.assign([], data);
        console.log('lista de alunos ', data)
      }
      )
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