
import { Component, ViewChild } from '@angular/core';
import { Abaco } from './apostilas-abaco.model';
import { ApostilasService } from 'src/app/services/apostilas.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'apostilas-abaco-apostilas',
  templateUrl: './apostilas-abaco.component.html',
  styleUrls: ['./apostilas-abaco.component.css']
})
export class ApostilasAbacoComponent {
  listApostila: Abaco[] = [];
  @ViewChild('dt') dt!: Table;

  constructor(private apostilasService: ApostilasService){
    this.apostilasService.listApostila.subscribe((data) =>{
      this.listApostila = Object.assign([], data);
      console.log('lista de apostilas ', data)
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
