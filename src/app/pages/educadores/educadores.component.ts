import { Component, ViewChild } from '@angular/core';
import { EducadoresService } from 'src/app/services/educadores.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { Educadores } from './educadores.model';

@Component({
    selector: 'educadores',
    templateUrl: './educadores.component.html',
    styleUrls: ['./educadores.component.css']
  })
  export class EducadoresComponent {
    open = true;
    list: Educadores [] = [];
    id: number = 0;
    erro = '';
    generos: string [] = [
      'Masculino',
      'Feminino',
      'Outros'
    ]
    @ViewChild('dt') dt!: Table;
  
    constructor(private educadoresService: EducadoresService){
      this.educadoresService.list.subscribe((data) =>{
        this.list = Object.assign([], data);
        console.log('educadores', data)
        })
        lastValueFrom(educadoresService.getList())
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