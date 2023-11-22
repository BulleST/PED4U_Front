import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApostilasService } from "src/app/services/apostilas.service";
import { Abaco } from "../apostilas-abaco.model";

@Component({
	selector: 'delete-apostilas',
	templateUrl: './delete-apostilas.component.html',
	styleUrls: ['./delete-apostilas.component.css']
})

export class DeleteApostilasComponent{
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