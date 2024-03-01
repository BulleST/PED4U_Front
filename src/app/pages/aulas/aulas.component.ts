
import { AlunoAula } from 'src/app/models/aulas.model';
import { DiaSemana, Turma } from 'src/app/models/turmas.model';
import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { lastValueFrom } from 'rxjs';
import { AulasService } from 'src/app/services/aulas.service';
import { ApostilaAbaco } from 'src/app/models/abaco.model';
import { ApostilasService } from 'src/app/services/apostilas.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {
  open = true;
  object: ApostilaAbaco = new ApostilaAbaco;
  list: Turma[] = [];
  id: number = 0;
  erro = '';
  loadingApostilas = false;
  apostilasAbaco: ApostilaAbaco[] = [];
  apostilaSelected?: ApostilaAbaco;
  diaSemanaList: DiaSemana [] = [
    {id: 1 , nome: 'Segunda-Feira'},
    {id: 2 , nome: 'Terça-Feira'},
    {id: 3 , nome: 'Quarta-Feira'},
    {id: 4 , nome: 'Quinta-Feira'},
    {id: 5 , nome: 'Sexta-Feira'},
    {id: 6 , nome: 'Sábado'}
    ];

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
   async apostilaChanged(e: any, item: AlunoAula) {
  
      this.loadingApostilas = true;
      if (!this.listapostilas || !this.listapostilas.length) {
          await lastValueFrom(this.apostilasService.getList());
      }
      this.apostilaSelected = this.listapostilas.find(x => x.id == e);
      this.loadingApostilas = false;

      console.log(this.object.nome, this.apostilaSelected)
  }

  formatDate( value :string){
    const datePipe: DatePipe = new DatePipe('en-US')
    let date = new Date(value)
    return datePipe.transform(date,'dd/MM/YYYY')
  }

  getDiaSemana(diaSemana_id:number): string{
    let diaSemana = this.diaSemanaList.find(x => x.id == diaSemana_id)
    if(diaSemana == null) return '';
    else return diaSemana.nome;
  }
}
    

