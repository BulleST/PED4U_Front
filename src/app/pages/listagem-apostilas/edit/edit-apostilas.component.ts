import { Component } from "@angular/core";
import { ApostilasService } from './../../../services/apostilas.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ApostilaAbaco } from '../apostilas-abaco.model';

@Component({
	selector: 'edit-apostilas',
	templateUrl: './edit-apostilas.component.html',
	styleUrls: ['./edit-apostilas.component.css']
})

export class EditApostilasComponent{
	open = true;
    abaco: ApostilaAbaco = new ApostilaAbaco;

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