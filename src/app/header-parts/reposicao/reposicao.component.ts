import { ReposicaoAlunos } from './reposicao.model';
import { Component, ViewChild } from '@angular/core';
import { ReposicaoService } from 'src/app/services/reposicao.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { AulasService } from 'src/app/services/aulas.service';



@Component({
  selector: 'aulas',
  templateUrl: './reposicao.component.html',
  styleUrls: ['./reposicao.component.css']
})
export class ReposicaoComponent {
  open = true;
  list: ReposicaoAlunos[] = [];
  id: number = 0;
  erro = '';
  // generos: string [] = [
  //   'Masculino',
  //   'Feminino',
  //   'Outros'
  // ]
  @ViewChild('dt') dt!: Table;
  // Função para limpar os filtros aplicados na tabela


  constructor(private reposicaoService: ReposicaoService) {
    this.reposicaoService.list.subscribe((data) => {
      this.list = Object.assign([], data);
      console.log('perfis', data)
    })
    lastValueFrom(reposicaoService.getList())
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