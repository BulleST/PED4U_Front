import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { Educadores } from "../pages/educadores/educadores.modal";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})

export class EducadoresService {

  list = new BehaviorSubject<Educadores[]>([
    { id: 1, nome: 'João', celular: 0, idade: 80, genero: 'masculino', email: 'joao@gmail.com' },
    { id: 2, nome: 'Maria', celular: 11933377700, idade: 80, genero: 'feminino', email: 'maria@gmail.com' },
    { id: 3, nome: 'Bete', celular: 0, idade: 50, genero: 'feminino', email: 'bete@gmail.com' },
    { id: 4, nome: 'Lucia', celular: 0, idade: 72, genero: 'feminino', email: 'lucia@gmail.com' },
    { id: 5, nome: 'Antonio', celular: 0, idade: 65, genero: 'masculino', email: 'antonio@gmail.com' },
    { id: 6, nome: 'Carlos', celular: 0, idade: 46, genero: 'masculino', email: 'carlos@gmail.com' },
    { id: 7, nome: 'Manoel', celular: 0, idade: 59, genero: 'masculino', email: 'manoel@gmail.com' },
  ])



  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.list;
  }

  get(alunoId: number) {
    return new Observable<Educadores>(observer => {
      var lista = this.sortLista()
      var objeto = lista.find(x => x.id == alunoId);
      if (!objeto) {
        throw new Error('Professor não encontrado.');
      }
    })
  }
  sortLista() {
    return this.list.value.sort((a, b) => a.id - b.id);
  }

  create(model: Educadores) {
    return new Observable<Response>(observer => {
      var lista = this.sortLista();
      var lastIndex = lista.length > 0 ? lista[lista.length - 1].id + 1 : 1;
      model.id = lastIndex;
      // lista.push(model);
      this.list.next(lista);
      // observer.next(model)
      observer.complete()
    })
  }

  // edit(id: number) {
  //   var objeto = this.list.value.find(x=>x.id == id)
  //   var lista = this.list
  //   return of (objeto ,lista);
  // }

  edit(model: Educadores) {
    return new Observable<Response>(observer => {
      var lista = this.sortLista();
      var index = lista.findIndex(x => x.id == model.id);
      if (index == -1) {
        throw new Error('Aluno não encontrado');
      }
      // lista.splice(index, 1, model);
      this.list.next(lista);
      // observer.next(model)
      observer.complete()
    });

  }

  delete(id: number) {
    return new Observable(observer => {
      var lista = this.sortLista();
      console.log(lista)
      var index = lista.findIndex(x => x.id == id);
      console.log(index)
      if (index == -1) {
        console.log(index)
        throw new Error('Aluno não encontrado');
      }
      lista.splice(index, 1);
      console.log(lista)
      this.list.next(lista)
      observer.next('teste')
      observer.complete()
    });
  }

}
