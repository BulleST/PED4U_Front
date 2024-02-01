import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { Turma, TurmaCadastro, TurmaPerfilRel } from "../models/turmas.model";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})

export class TurmasService {
  url = environment.url;
  list: BehaviorSubject<Turma[]> = new BehaviorSubject<Turma[]>([])

  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<Turma[]>(`${this.url}/Turma`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  // getListPerfil(){
  //   return this.httpClient.get<Turma[]>(`${this.url}/Turma`)
  //     .pipe(tap({
  //       next: res => {
  //         this.list.next(res)
  //       }
  //     }))
  // }

  get(id: number) {
    return this.httpClient.get<Turma>(`${this.url}/Turma/${id}`)

  }

  post(model: TurmaCadastro) {
    return this.httpClient.post<Response>(`${this.url}/Turma`,model)
  }

  postTurmaPerfilRel(model: TurmaPerfilRel){
    return this.httpClient.post<Response>(`${this.url}/Turma_Perfil_Rel`,model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Turma/${id}`)
  }
}

//   list = new BehaviorSubject<Turma[]>([
//     { id: 1, horarioTurma: new Date(), diaTurma: 'segunda-feira', qtdeAlunos: 12 , vagasTurma: 1 , nome: 'Marina', perfil: [{id: 1, nome: 'CCL'}, {id: 2, nome: '80+'}, {id: 3, nome: 'Adolescente'}, {id: 4, nome: 'Adulto'} ]},
//     { id: 1, horarioTurma: new Date(), diaTurma: 'segunda-feira', qtdeAlunos: 5 , vagasTurma: 3 , nome: 'Lucas', perfil: [{id: 3, nome: 'Adolescente'}, {id: 4, nome: 'Adulto'} ]},
//     { id: 1, horarioTurma: new Date(), diaTurma: 'segunda-feira', qtdeAlunos: 6 , vagasTurma: 10 , nome: 'Luana', perfil: [{id: 1, nome: 'CCL'}, {id: 2, nome: '80+'} ]},
//     { id: 1, horarioTurma: new Date(), diaTurma: 'segunda-feira', qtdeAlunos: 12 , vagasTurma: 4 , nome: 'Antônio', perfil: [{id: 1, nome: 'CCL'}, {id: 2, nome: '80+'} ]},
//     { id: 1, horarioTurma: new Date(), diaTurma: 'segunda-feira', qtdeAlunos: 12 , vagasTurma: 5 , nome: 'Letícia', perfil: [{id: 1, nome: 'CCL'}, {id: 2, nome: '80+'} ]},

   
    
   
//   ])

//   constructor(
//     private httpClient: HttpClient
//   ) { }

//   getList() {
//     return new Observable<Turma[]>(observer => {
//       var lista = this.sortLista();

//       this.list.next(lista);
//       observer.complete();
//     })
//   }

//   get(id: number) {
//     return new Observable<Turma>(observer => {
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

//   post(model: Turma) {
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
