
import { Component, ViewChild } from '@angular/core';
import { Perfil, Perfis } from 'src/app/models/perfis.model';
import { ApostilasService } from 'src/app/services/apostilas.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'apostilas-abaco-apostilas',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
})
export class PerfisComponent {
  list: Perfil[] = [];
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

}
