
import { ApostilasService } from './../../../services/apostilas.service';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Abaco } from '../apostilas-abaco.model';

@Component({
	selector: 'create-apostilas',
	templateUrl: './create-apostilas.component.html',
	styleUrls: ['./create-apostilas.component.css']
})

export class CreateApostilasComponent{
    open = true;
    abaco: Abaco = new Abaco;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private apostilasService: ApostilasService
    ){}

    // Abrir modal
	ngOnInit(): void {
		this.open = true
	};
    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['apostilas-abaco']);
		return;
	}

}