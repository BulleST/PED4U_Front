
import { AlunoAulaRel } from './../models/aluno.model';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { AlunoAula, Aula} from "../models/aulas.model";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";
import { environment } from "src/environment/environment";
import { ApostilaAbaco } from "../models/abaco.model";
import { Turma } from '../models/turmas.model';

@Injectable({
  providedIn: 'root'
})

export class AulasService {
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

  get(id: number) {
    return this.httpClient.get<AlunoAulaRel>(`${this.url}/Aluno_Aula_Rel/Presenca-by-AulaId/{aula_Id}`)

  }

  post(model: AlunoAula) {
    return this.httpClient.post<Response>(`${this.url}/Aula`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Aula/${id}`)
  }

}
