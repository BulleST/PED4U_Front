

import { Component, ViewChild } from '@angular/core';
import { AlunoList } from 'src/app/models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { DiaSemana } from 'src/app/models/turmas.model';

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
    ];
    diaSemanaList: DiaSemana [] = [
      {id: 1 , nome: 'Segunda-Feira'},
      {id: 2 , nome: 'Terça-Feira'},
      {id: 3 , nome: 'Quarta-Feira'},
      {id: 4 , nome: 'Quinta-Feira'},
      {id: 5 , nome: 'Sexta-Feira'},
      {id: 6 , nome: 'Sábado'}
      ];
    loading: boolean = true;
    @ViewChild('dt') dt!: Table;

    constructor(private alunoService: AlunoService){
      this.alunoService.list.subscribe((data) =>{
        this.list = Object.assign([], data);

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

    getDiaSemana(diaSemana_id:number): string{
      let diaSemana = this.diaSemanaList.find(x => x.id == diaSemana_id)
      if(diaSemana == null) return '';
      else return diaSemana.nome;
    }
  }