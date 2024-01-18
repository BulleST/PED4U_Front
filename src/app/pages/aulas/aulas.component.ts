
import { Aulas } from 'src/app/models/aulas.model';
import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { AulasService } from 'src/app/services/aulas.service';
import { ApostilaAbaco } from '../abaco/abaco.model';
import { ApostilasService } from 'src/app/services/apostilas.service';



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
  loadingApostilas = false;
  apostilasAbaco: ApostilaAbaco[] = [];
  apostilaSelected?: ApostilaAbaco;


  apostilas: ApostilaAbaco [] = [
    { id: 1, nome: 'Basico 1', qtdePaginas: 2, materialExtra: false },
    { id: 1, nome: 'Basico 2', qtdePaginas: 2, materialExtra: false },
    { id: 1, nome: 'Basico 3', qtdePaginas: 2, materialExtra: false },
    { id: 1, nome: 'Intermediario 1', qtdePaginas: 2, materialExtra: false },
    { id: 1, nome: 'Intermediario 2', qtdePaginas: 2, materialExtra: false },
    { id: 1, nome: 'Intermediario 3', qtdePaginas: 2, materialExtra: false },
  ]
  @ViewChild('dt') dt!: Table;
  // Função para limpar os filtros aplicados na tabela


  constructor(private aulasService: AulasService,
    private apostilasService: ApostilasService,) {
    this.aulasService.list.subscribe((data) => {
      this.list = Object.assign([], data);
      console.log('perfis', data)
    })
    lastValueFrom(aulasService.getList()).then
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
  apostilaChanged(e: any, item: Aulas) {
    console.log(item)
    console.log(e)

    return
    // this.loadingApostilas = true;
    // if (!this.apostilasAbaco || !this.apostilasAbaco.length) {
    //     await lastValueFrom(this.apostilasService.getList());
    // }
    // item.apostila = this.apostilasAbaco.find(x => x.id == e);
    // this.loadingApostilas = false;

}
    

}