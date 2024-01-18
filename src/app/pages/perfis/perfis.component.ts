
import { Component, ViewChild } from '@angular/core';
import { Perfil } from 'src/app/models/perfis.model';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'apostilas-abaco-apostilas',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
})
export class PerfisComponent {
  list: Perfil[] = [];
  @ViewChild('dt') dt!: Table;

  constructor(private perfilService: PerfilService){
    this.perfilService.list.subscribe((data) =>{
      this.list = Object.assign([], data);
      console.log('lista de apostilas ', data)
      })
      lastValueFrom(perfilService.getList())
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
