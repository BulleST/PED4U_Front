
import { Aulas } from 'src/app/models/aulas.model';
import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { AulasService } from 'src/app/services/aulas.service';
import { ApostilaAbaco } from 'src/app/models/abaco.model';
import { ApostilasService } from 'src/app/services/apostilas.service';



@Component({
  selector: 'aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {
  open = true;
  object: ApostilaAbaco = new ApostilaAbaco;
  list: Aulas[] = [];
  id: number = 0;
  erro = '';
  loadingApostilas = false;
  apostilasAbaco: ApostilaAbaco[] = [];
  apostilaSelected?: ApostilaAbaco;


  listapostilas: ApostilaAbaco [] = [
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
   async apostilaChanged(e: any, item: Aulas) {
  
      this.loadingApostilas = true;
      if (!this.listapostilas || !this.listapostilas.length) {
          await lastValueFrom(this.apostilasService.getList());
      }
      this.apostilaSelected = this.listapostilas.find(x => x.id == e);
      this.loadingApostilas = false;

      console.log(this.object.nome, this.apostilaSelected)
  }

}
    

