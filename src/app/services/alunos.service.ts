
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { Alunos } from "../pages/alunos/alunos.model";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
    providedIn: 'root'
  })

  export class AlunosService{
    url = environment.url;
    listAlunos: BehaviorSubject<Alunos[]> = new BehaviorSubject<Alunos[]>([])
   

      constructor(
        private httpClient: HttpClient
      ) { }

      getList(){
        return this.httpClient.get<Alunos[]>(`${this.url}/Alunos`)
        .pipe(tap({
            next:res=>{
                this.listAlunos.next(res)
            }
        }))
    }

        get(id:number){
          return this.httpClient.get<Alunos[]>(`${this.url}/Alunos/${id}`)

      }

      post(model:Alunos){
          return this.httpClient.post<Response>(`${this.url}/Alunos`, model)
      }

      delete(id:number){
          return this.httpClient.delete<Response>(`${this.url}/Alunos/${id}`)
      }

  }