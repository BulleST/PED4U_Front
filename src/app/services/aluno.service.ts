
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { Aluno } from "../models/aluno.model";
import { AlunoList } from "../models/aluno.model";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})

export class AlunoService {
  url = environment.url;
  list: BehaviorSubject<AlunoList[]> = new BehaviorSubject<AlunoList[]>([])


  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<AlunoList[]>(`${this.url}/Aluno`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  getListPerfil(){
    return this.httpClient.get<AlunoList[]>(`${this.url}/Aluno`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  get(id: number) {
    return this.httpClient.get<AlunoList>(`${this.url}/Aluno/${id}`)

  }

  post(model: Aluno) {
    return this.httpClient.post<Response>(`${this.url}/Aluno`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Aluno/${id}`)
  }

}