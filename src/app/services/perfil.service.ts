
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, tap } from "rxjs";
import { Perfil} from "../models/perfis.model";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
  providedIn: 'root'
})

export class PerfilService {
  url = environment.url;
  list: BehaviorSubject<Perfil[]> = new BehaviorSubject<Perfil[]>([])


  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient.get<Perfil[]>(`${this.url}/Turma_Perfil`)
      .pipe(tap({
        next: res => {
          this.list.next(res)
        }
      }))
  }


  get(id: number) {
    return this.httpClient.get<Perfil>(`${this.url}/Turma_Perfil/${id}`)

  }

  post(model: Perfil) {
    return this.httpClient.post<Response>(`${this.url}/Turma_Perfil`, model)
  }

  delete(id: number) {
    return this.httpClient.delete<Response>(`${this.url}/Turma_Perfil/${id}`)
  }

}
