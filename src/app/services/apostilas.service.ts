import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { ApostilaAbaco } from "../pages/listagem-apostilas/apostilas-abaco.model";
import { environment } from "src/environment/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from "../models/response.model";

@Injectable({
    providedIn: 'root'
  })

export class ApostilasService{
    url = environment.url;
    listApostila: BehaviorSubject<ApostilaAbaco[]> = new BehaviorSubject<ApostilaAbaco[]>([])

    constructor(
        private httpClient: HttpClient
    ){}

    getList(){
        return this.httpClient.get<ApostilaAbaco[]>(`${this.url}/ApostilaAbaco`)
        .pipe(tap({
            next:res=>{
                this.listApostila.next(res)
            }
        }))
    }

    get(id:number){
        return this.httpClient.get<ApostilaAbaco[]>(`${this.url}/ApostilaAbaco/${id}`)

    }

    post(model:ApostilaAbaco){
        return this.httpClient.post<Response>(`${this.url}/ApostilaAbaco`, model)
    }

    delete(id:number){
        return this.httpClient.delete<Response>(`${this.url}/ApostilaAbaco/${id}`)
    }

    
}