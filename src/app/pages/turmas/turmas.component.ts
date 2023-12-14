
import { Component, ViewChild } from '@angular/core';
import { TurmasService } from './../../services/turmas.service';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { Turma } from './turmas.model';



@Component({
  selector: 'turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent {
  open = true;
  list: Turma[] = [];
  id: number = 0;
  erro = '';
  // generos: string [] = [
  //   'Masculino',
  //   'Feminino',
  //   'Outros'
  // ]
  @ViewChild('dt') dt!: Table;
  // Função para limpar os filtros aplicados na tabela


  constructor(private turmasService: TurmasService) {
    this.turmasService.list.subscribe((data) => {
      this.list = Object.assign([], data);
      console.log('perfis', data)
    })
    lastValueFrom(turmasService.getList())
  }

  concatenatePerfil(turma: Turma): string{
    let perfis: string = '';
    
    for(let i = 0; i < turma.perfil.length; i++){
      perfis += turma.perfil[i].nome
      if(i != turma.perfil.length-1){
        perfis += ', '
      }
       
    }
    return perfis
  }

  clear(table: Table) {
    table.clear();
  }

  // Função para filtrar a tabela a partir do input
  applyFilterGlobal(event: any, filterType: string) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, filterType);
  }
}