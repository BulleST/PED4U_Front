import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { Aulas } from "../header-parts/aulas/aulas.model";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})

export class AulasService {

  list = new BehaviorSubject<Aulas[]>([
    { id: 1, nome: 'Lucas', apostila: 'Intermediário 2', pagina: 24, falta: true, reposicao: false },
    { id: 2, nome: 'Marina', apostila: 'Básico 1', pagina: 30, falta: false, reposicao: true },
    { id: 3, nome: 'Luana', apostila: 'Avançado 2', pagina: 32, falta: true, reposicao: true },
    { id: 4, nome: 'João', apostila: 'Intermediário 1', pagina: 72, falta: false, reposicao: false },
   
  ])



  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return new Observable<Aulas[]>(observer => {
      var lista = this.sortLista();

      this.list.next(lista);
      observer.complete();
    })
  }

  get(alunoId: number) {
    return new Observable<Aulas>(observer => {
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

  post(model: Aulas) {
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

  // post(model: Educadores) {
  //   return new Observable<Response>(observer => {
  //     var lista = this.sortLista();
  //     var index = lista.findIndex(x => x.id == model.id);
  //     if (index == -1) {
  //       throw new Error('Aluno não encontrado');
  //     }
  //     // lista.splice(index, 1, model);
  //     this.list.next(lista);
  //     // observer.next(model)
  //     observer.complete()
  //   });

  // }

  delete(id: number) {
    return new Observable<Response>(observer => {
      var lista = this.sortLista();
      console.log(lista)
      var index = lista.findIndex(x => x.id == id);
      console.log(index)
      if (index == -1) {
        observer.next({
          message: 'Educador não encontrado',
          success: false
        })
        observer.complete()
      }
      lista.splice(index, 1);
      // this.list.next(lista)
      observer.next({
        message: 'Educador excluído com sucesso',
        success: true
      })
      observer.complete()
    });
  }

}
