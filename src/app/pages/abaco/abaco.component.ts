
import { Component, ViewChild } from '@angular/core';
import { ApostilaAbaco } from 'src/app/models/abaco.model';
import { ApostilasService } from 'src/app/services/apostilas.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'apostilas-abaco-apostilas',
  templateUrl: './abaco.component.html',
  styleUrls: ['./abaco.component.css']
})
export class AbacoComponent {
  list: ApostilaAbaco[] = [];
  @ViewChild('dt') dt!: Table;

  constructor(private apostilasService: ApostilasService){
    this.apostilasService.list.subscribe((data) =>{
      this.list = Object.assign([], data);
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
