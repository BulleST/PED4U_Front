import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Alunos } from "../pages/alunos/alunos.model";

@Injectable({
    providedIn: 'root'
  })

  export class AlunosService{
    listAlunos: BehaviorSubject<Alunos[]> = new BehaviorSubject<Alunos[]>([])

    constructor(){
        var index = 0;
        this.listAlunos.next([
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'masculino', horario: new Date() , semana: 'quinta-feira', perfil: 'adolescente', vigente: false },
            {id: index ++, nome: 'Maria', telefone: 11930183367, idade: 23, genero:'feminino', horario: new Date(), semana: 'sexta-feira', perfil: 'adolescente', vigente: true },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(), semana: 'sábado', perfil: 'adulto', vigente: false },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(), semana: 'terça-feira', perfil: 'adolescente', vigente: false },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(),semana: 'quinta-feira', perfil: 'adolescente', vigente: false },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(), semana: 'quinta-feira', perfil: 'adolescente', vigente: false },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(), semana: 'quinta-feira', perfil: 'adolescente', vigente: false },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(),semana: 'quinta-feira', perfil: 'adolescente', vigente: false },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(),semana: 'quinta-feira', perfil: 'adolescente', vigente: false },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(),semana: 'quinta-feira', perfil: 'adolescente', vigente: false },
            {id: index ++, nome: 'João', telefone: 11933377700, idade: 14, genero:'feminino', horario: new Date(), semana: 'quinta-feira', perfil: 'adolescente', vigente: false }
        ])
    }
  }