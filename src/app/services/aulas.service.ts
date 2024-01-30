import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { AlunoAula } from "../models/aulas.model";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";
import { environment } from "src/environment/environment";
import { ApostilaAbaco } from "../models/abaco.model";

@Injectable({
  providedIn: 'root'
})

export class AulasService {
  url = environment.url;
  list: BehaviorSubject<AlunoAula[]> = new BehaviorSubject<AlunoAula[]>([])




  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<AlunoAula[]>(`${this.url}/Aluno_Aula_Rel`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  get(id: number) {
    return this.httpClient.get<AlunoAula>(`${this.url}/Aluno_Aula_Rel/${id}`)

  }

  post(model: AlunoAula) {
    return this.httpClient.post<Response>(`${this.url}/Aula`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Aula/${id}`)
  }

}
