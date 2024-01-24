import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { Reposicao } from "../models/reposicao.model";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})

export class ReposicaoService {
  url = environment.url;
  list: BehaviorSubject<Reposicao[]> = new BehaviorSubject<Reposicao[]>([])

  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<Reposicao[]>(`${this.url}/Reposicao`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  getListPerfil(){
    return this.httpClient.get<Reposicao[]>(`${this.url}/Reposicao`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  get(id: number) {
    return this.httpClient.get<Reposicao>(`${this.url}/Reposicao/${id}`)

  }

  post(model: Reposicao) {
    return this.httpClient.post<Response>(`${this.url}/Reposicao`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Reposicao/${id}`)
  }
}

//   list = new BehaviorSubject<ReposicaoAlunos[]>([
//     { id: 1, diaTurma: 'Quinta-feira', horarioTurma: new Date(),perfil: [{id: 1, nome: 'CCL'}, {id: 2, nome: '80+'}], vagasTurma: 2 },
//     { id: 2, diaTurma: 'Segunda-feira', horarioTurma: new Date(), perfil:[{id: 3, nome: 'Adolescente'}, {id: 4, nome: 'Adulto'}], vagasTurma: 1 },
//     { id: 3, diaTurma: 'Terça-feira', horarioTurma: new Date(), perfil:[{id: 5, nome: 'Júnior 1'}, {id: 6, nome: 'Júnior 2'}], vagasTurma: 0 },
//     { id: 4, diaTurma: 'Quarta-feira', horarioTurma: new Date(), perfil: [{id: 7, nome: 'Adulto'}, {id: 8, nome: 'CCL'}], vagasTurma: 3},
//     { id: 5, diaTurma: 'Sexta-feira', horarioTurma: new Date(), perfil: [{id: 9, nome: 'Adolescente'}, {id: 10, nome: 'CCL'}], vagasTurma: 3},
//     { id: 6, diaTurma: 'Sábado', horarioTurma: new Date(), perfil: [{id: 11, nome: 'Adulto'}, {id: 12, nome: 'CCL'}], vagasTurma: 3},
    
    
   
//   ])

//   constructor(
//     private httpClient: HttpClient
//   ) { }

//   getList() {
//     return new Observable<ReposicaoAlunos[]>(observer => {
//       var lista = this.sortLista();

//       this.list.next(lista);
//       observer.complete();
//     })
//   }

//   get(id: number) {
//     return new Observable<ReposicaoAlunos>(observer => {
//       var lista = this.sortLista()
//       var objeto = lista.find(x => x.id == id);
//       if (!objeto) {
//         throw new Error('Professor não encontrado.');
//       }
//     })
//   }
//   sortLista() {
//     return this.list.value.sort((a, b) => a.id - b.id);
//   }

//   post(model: ReposicaoAlunos) {
//     return new Observable<Response>(observer => {
//       var lista = this.sortLista();
//       var lastIndex = lista.length > 0 ? lista[lista.length - 1].id + 1 : 1;
//       model.id = lastIndex;
//       // lista.push(model);
//       this.list.next(lista);
//       // observer.next(model)
//       observer.complete()
//     })
//   }

//   // edit(id: number) {
//   //   var objeto = this.list.value.find(x=>x.id == id)
//   //   var lista = this.list
//   //   return of (objeto ,lista);
//   // }

//   // post(model: Educadores) {
//   //   return new Observable<Response>(observer => {
//   //     var lista = this.sortLista();
//   //     var index = lista.findIndex(x => x.id == model.id);
//   //     if (index == -1) {
//   //       throw new Error('Aluno não encontrado');
//   //     }
//   //     // lista.splice(index, 1, model);
//   //     this.list.next(lista);
//   //     // observer.next(model)
//   //     observer.complete()
//   //   });

//   // }

//   delete(id: number) {
//     return new Observable<Response>(observer => {
//       var lista = this.sortLista();
//       console.log(lista)
//       var index = lista.findIndex(x => x.id == id);
//       console.log(index)
//       if (index == -1) {
//         observer.next({
//           message: 'Educador não encontrado',
//           success: false
//         })
//         observer.complete()
//       }
//       lista.splice(index, 1);
//       // this.list.next(lista)
//       observer.next({
//         message: 'Educador excluído com sucesso',
//         success: true
//       })
//       observer.complete()
//     });
//   }

// }
