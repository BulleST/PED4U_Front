
// import { Injectable } from "@angular/core";
// import { BehaviorSubject, Observable, of} from "rxjs";
// import { Aluno, AlunoList } from "../pages/aluno/aluno.model";
// import { environment } from "src/environment/environment";
// import { HttpClient } from "@angular/common/http";
// import { Response } from "../models/response.model";

// @Injectable({
//     providedIn: 'root'
//   })

//   export class AlunoTesteService {
    
//     list = new BehaviorSubject<AlunoList[]>([
//       { id: 1 , nome: 'João' , celular: 0, idade: 80, genero: 'masculino', horarioTurma: new Date(), diaTurma: 'segunda-feira', perfil: '80+', dataVigencia: true },
//       { id: 2 , nome: 'João' , celular: 0, idade: 80, genero: 'masculino', horarioTurma: new Date(), diaTurma: 'segunda-feira', perfil: '', dataVigencia: false },
//       { id: 3 , nome: 'João' , celular: 0, idade: 80, genero: 'masculino', horarioTurma: new Date(), diaTurma: 'segunda-feira', perfil: '', dataVigencia: false },
//     ])

//     // constructor(){
//     //     var index = 1;
//     //     this.list.next([
//     //         ,
//     //         {alunoId: index++ , nome: 'Maria' , celular: 0, idade: 18, genero: 'feminino', horarioTurma: new Date(), diaTurma: 'terça-feira', perfilAluno: '', dataVigencia: false },
//     //         {alunoId: index++ , nome: 'Beatriz', celular: 0, idade: 24, genero: 'feminino', horarioTurma: new Date(), diaTurma: 'quarta-feira', perfilAluno: '', dataVigencia: true },
//     //         {alunoId: index++ , nome: 'Noemi', celular: 0, idade: 23, genero: 'feminino', horarioTurma: new Date(), diaTurma: 'quinta-feira', perfilAluno: '', dataVigencia: true },
//     //     ])
//     // }

//     getList() {
//       return new Observable<AlunoList[]>(observer => {
//         var lista = this.sortLista();
  
//         this.list.next(lista);
//         observer.next(lista);
//         observer.complete();
//       })
//     }
    
//     get(alunoId: number) {
//     return new Observable<Aluno>(observer => {
//         var lista = this.sortLista()
//         var objeto = lista.find(x => x.id == alunoId) as AlunoList;
//         console.log(objeto.genero)
//         console.log(lista)
//         if (!objeto) {
//         throw new Error('Não encontrado.');
//         return 
//         }
//         var a: Aluno= objeto as unknown as Aluno;
//         a.perfil_Id = 2;
//         console.log(a)
//         observer.next(a)
//         observer.complete()
        
//     })
//     }
//     sortLista() {
//         return this.list.value.sort((a, b) => a.id - b.id);
//       }
    
//     create(model: Aluno) {
//     return new Observable<Response>(observer => {
//         var lista = this.sortLista();
//         var lastIndex = lista.length > 0 ? lista[lista.length - 1].id + 1 : 1;
//         model.id = lastIndex;
//         // lista.push(model);
//         this.list.next(lista);
//         // observer.next(model)
//         observer.complete()
//     })
//     }

//     post(model: AlunoList) {
//       return new Observable<Response>(observer => {
//         var lista = this.sortLista();
//         var lastIndex = lista.length > 0 ? lista[lista.length - 1].id + 1 : 1;
//         model.id = lastIndex;
//         // lista.push(model);
//         this.list.next(lista);
//         // observer.next(model)
//         observer.complete()
//       })
//     }

//     // edit(id: number) {
//     //   var objeto = this.list.value.find(x=>x.id == id)
//     //   var lista = this.list
//     //   return of (objeto ,lista);
//     // }

//     edit(model: Aluno) {
//         return new Observable<Response>(observer => {
//           var lista = this.sortLista();
//           var index = lista.findIndex(x => x.id == model.id);
//           if (index == -1) {
//             throw new Error('Aluno não encontrado');
//           }
//           // lista.splice(index, 1, model);
//           this.list.next(lista);
//           // observer.next(model)
//           observer.complete()
//         });
    
//       }

//       delete(id: number) {
//         return new Observable<Response>(observer => {
//           var lista = this.sortLista();
//           console.log(lista)
//           var index = lista.findIndex(x => x.id == id);
//           console.log(index)
//           if (index == -1) {
//             observer.next({
//               message: 'Aluno não encontrado',
//               success: false
//             })
//             observer.complete()
//           }
//           lista.splice(index, 1);
//           // this.list.next(lista)
//           observer.next({
//             message: 'Aluno excluído com sucesso',
//             success: true
//           })
//           observer.complete()
//         });
//       }
    
//     }


