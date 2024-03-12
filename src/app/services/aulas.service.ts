
import { AlunoAulaListagem, AlunoAulaRel } from './../models/aluno.model';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { AulaCadastroBody, Aula, AlunoAula} from "../models/aulas.model";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";
import { environment } from "src/environment/environment";
import { ApostilaAbaco } from "../models/abaco.model";
import { Turma, TurmaAula } from '../models/turmas.model';

@Injectable({
  providedIn: 'root'
})

export class AulasService {
  url = environment.url;
  list: BehaviorSubject<Turma[]> = new BehaviorSubject<Turma[]>([])
  listTurma: BehaviorSubject<TurmaAula[]> = new BehaviorSubject<TurmaAula[]>([])
  listAlunos: BehaviorSubject<AlunoAulaListagem[]> = new BehaviorSubject<AlunoAulaListagem[]>([])




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

  getListAula(turma_id: number) {
    return this.httpClient.get<TurmaAula[]>(`${this.url}/Aula/list/turma/${turma_id}`)
      .pipe(tap({
        next: res => {
          this.listTurma.next(res)
        }
      }))
  }

  get(aula_Id: number) {
    return this.httpClient.get<AlunoAulaListagem>(`${this.url}/Aluno_Aula_Rel/list/aluno/${aula_Id}`)

  }

  post(model: AulaCadastroBody) {
    return this.httpClient.post<Response>(`${this.url}/Aula`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Aula/${id}`)
  }

}
