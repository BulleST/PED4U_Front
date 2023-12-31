

import { Component, ViewChild } from '@angular/core';
import { Aluno } from './aluno.model';
import { AlunoTesteService} from 'src/app/services/aluno-teste.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'alunos',
    templateUrl: './aluno.component.html',
    styleUrls: ['./aluno.component.css']
  })


  export class AlunoComponent{
    open = true;
    list: Aluno [] = [];
    id: number = 0;
    erro = '';
    generos: string [] = [
      'Masculino',
      'Feminino',
      'Outros'
    ]
    loading: boolean = true;
    @ViewChild('dt') dt!: Table;

    constructor(private alunoTesteService: AlunoTesteService){
      // this.AlunoService.list.subscribe((data) =>{
      //   this.list = Object.assign([], data);
      //   console.log('lista de apostilas ', data)
      //   })
      //   lastValueFrom(AlunoService.getList())
        this.loading = false;
        this.alunoTesteService.list.subscribe((data) => {
            this.list = Object.assign([], data);
            console.log('lista', data)
    })
      
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