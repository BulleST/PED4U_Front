import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Abaco } from "../pages/listagem-apostilas/apostilas-abaco.model";

@Injectable({
    providedIn: 'root'
  })

export class ApostilasService{
    listApostila: BehaviorSubject<Abaco[]> = new BehaviorSubject<Abaco[]>([])

    constructor(){
        var index = 0
        this.listApostila.next([
            {id: ++index, nome: 'Básico 1 ' , paginas: index++, material: true},
            {id: ++index, nome: 'Básico 2 ' , paginas: index++, material: false},
            {id: ++index, nome: 'Básico 3 ' , paginas: index++, material: true},
            {id: ++index, nome: 'Básico 9 ' , paginas: index++, material: false},
            {id: ++index, nome: 'Intermediário 1 ' , paginas: index++, material: false},
            {id: ++index, nome: 'Intermediário 2  ' + index, paginas: index++, material: false},
            {id: ++index, nome: 'Avançado 1 ' , paginas: index++, material: false},
            {id: ++index, nome: 'Avançado 2 ' , paginas: index++, material: false},
            {id: ++index, nome: 'Avançado 3 ', paginas: index++, material: false},

        ])
    }
}