import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap} from "rxjs";
import { Educadores } from "../pages/educadores/educadores.modal";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
    providedIn: 'root'
  })

  export class EducadoresService{


  url = environment.url;
  list: BehaviorSubject<Educadores[]> = new BehaviorSubject<Educadores[]>([])


  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<Educadores[]>(`${this.url}/`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  getListPerfil(){
    return this.httpClient.get<Educadores[]>(`${this.url}/`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }

  get(id: number) {
    return this.httpClient.get<Educadores[]>(`${this.url}/Aluno/${id}`)

  }

  post(model: Educadores) {
    return this.httpClient.post<Response>(`${this.url}/Aluno`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Aluno/${id}`)
  }

}
  