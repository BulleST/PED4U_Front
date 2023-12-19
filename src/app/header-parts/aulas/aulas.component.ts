import { Aulas } from './aulas.model';
import { Component, ViewChild } from '@angular/core';
import { PerfisService } from 'src/app/services/perfis.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { AulasService } from 'src/app/services/aulas.service';



@Component({
  selector: 'aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {
  open = true;
  list: Aulas[] = [];
  id: number = 0;
  erro = '';
  // generos: string [] = [
  //   'Masculino',
  //   'Feminino',
  //   'Outros'
  // ]
  @ViewChild('dt') dt!: Table;
  // Função para limpar os filtros aplicados na tabela


  constructor(private aulasService: AulasService) {
    this.aulasService.list.subscribe((data) => {
      this.list = Object.assign([], data);
      console.log('perfis', data)
    })
    lastValueFrom(aulasService.getList())
  }

  clear(table: Table) {
    table.clear();
  }

  // Função para filtrar a tabela a partir do input
  applyFilterGlobal(event: any, filterType: string) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
  }

  getValueFalta(value: boolean){
    switch (value){
      case true:
        return 'Presente';
      case false:
        return 'Ausente';
    }
  }

  getValueReposicao(value: boolean){
    switch (value){
      case true:
        return 'Sim';
      case false:
        return 'Não';
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