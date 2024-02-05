import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { Educador } from "../models/educador.model";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})

export class EducadoresService {

  url = environment.url;
  list: BehaviorSubject<Educador[]> = new BehaviorSubject<Educador[]>([])

  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<Educador[]>(`${this.url}/Usuario/educador-list/`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }


  get(id: number) {
    return this.httpClient.get<Educador>(`${this.url}/Usuario/educador-list/${id}`)

  }

  post(model: Educador) {
    return this.httpClient.post<Response>(`${this.url}/Usuario/educador-list/$`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Usuario/educador-list/${id}`)
  }

 

 

 
  // sortLista() {
  //   return this.list.value.sort((a, b) => a.id - b.id);
  // }

 

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


}
