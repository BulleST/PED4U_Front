
import { Component } from '@angular/core';
import { ApostilasAbaco } from './apostilas-abaco.model';
import { ApostilasService } from 'src/app/services/apostilas.service';

@Component({
  selector: 'apostilas-abaco-apostilas',
  templateUrl: './apostilas-abaco.component.html',
  styleUrls: ['./apostilas-abaco.component.css']
})
export class ApostilasAbacoComponent {

  listagem: ApostilasAbaco[] = [];

  constructor(private apostilasService: ApostilasService){
    this.apostilasService.listagem.subscribe((data) =>{
      this.listagem = Object.assign([], data);
      console.log('lista de apostilas ', data)
    })

  }
}
