import { Component, ViewChild } from '@angular/core';
import { PerfisService } from 'src/app/services/perfis.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { Perfis } from './perfis.modal';


@Component({
  selector: 'perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
})
export class PerfisComponent {
  open = true;
  list: Perfis[] = [];
  id: number = 0;
  erro = '';
  // generos: string [] = [
  //   'Masculino',
  //   'Feminino',
  //   'Outros'
  // ]
  @ViewChild('dt') dt!: Table;
  // Função para limpar os filtros aplicados na tabela


  constructor(private perfisService: PerfisService) {
    this.perfisService.list.subscribe((data) => {
      this.list = Object.assign([], data);
      console.log('perfis', data)
    })
    lastValueFrom(perfisService.getList())
  }

  clear(table: Table) {
    table.clear();
  }

  // Função para filtrar a tabela a partir do input
  applyFilterGlobal(event: any, filterType: string) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
  }
}