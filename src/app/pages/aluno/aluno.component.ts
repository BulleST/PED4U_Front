

import { Component, ViewChild } from '@angular/core';
import { AlunoList } from 'src/app/models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'alunos',
    templateUrl: './aluno.component.html',
    styleUrls: ['./aluno.component.css']
  })


  export class AlunoComponent{
    open = true;
    list: AlunoList [] = [];
    id: number = 0;
    erro = '';
    generos: string [] = [
      'Masculino',
      'Feminino',
      'Outros'
    ]
    loading: boolean = true;
    @ViewChild('dt') dt!: Table;

    constructor(private alunoService: AlunoService){
      this.alunoService.list.subscribe((data) =>{
        this.list = Object.assign([], data);
        console.log('lista de apostilas ', data)
        })
        lastValueFrom(alunoService.getList())
    }
      
  

    // Função para limpar os filtros aplicados na tabela
    clear(table: Table) {
      table.clear();
    }

    // Função para filtrar a tabela a partir do input
    applyFilterGlobal(event: any, filterType: string) {
      this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
    }

    getValue(value: string){
      if (value == null){
          return 'Inativo';
      }else {
        return 'Ativo'
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