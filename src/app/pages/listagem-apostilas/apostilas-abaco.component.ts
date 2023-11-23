
import { Component, ViewChild } from '@angular/core';
import { ApostilaAbaco } from './apostilas-abaco.model';
import { ApostilasService } from 'src/app/services/apostilas.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'apostilas-abaco-apostilas',
  templateUrl: './apostilas-abaco.component.html',
  styleUrls: ['./apostilas-abaco.component.css']
})
export class ApostilasAbacoComponent {
  listApostila: ApostilaAbaco[] = [];
  @ViewChild('dt') dt!: Table;

  constructor(private apostilasService: ApostilasService){
    this.apostilasService.listApostila.subscribe((data) =>{
      this.listApostila = Object.assign([], data);
      console.log('lista de apostilas ', data)
      })
      lastValueFrom(apostilasService.getList())
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

  getSeverity(status: string){
    switch (status){
      case "Sim":
        return 'success';
      case "Não":
        return 'danger';
      default: return 'info'
    }
  }
}
