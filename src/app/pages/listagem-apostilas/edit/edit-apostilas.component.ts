import { Component } from "@angular/core";
import { ApostilasService } from './../../../services/apostilas.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ApostilaAbaco } from '../apostilas-abaco.model';
import { ToastrService } from "ngx-toastr";
import { lastValueFrom } from "rxjs";

@Component({
	selector: 'edit-apostilas',
	templateUrl: './edit-apostilas.component.html',
	styleUrls: ['./edit-apostilas.component.css']
})

export class EditApostilasComponent{
	open = true;
    abaco: ApostilaAbaco = new ApostilaAbaco;
	id: number = 0;
	erro = '';
	loading: boolean = false;

	constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private apostilasService: ApostilasService,
		private toastr: ToastrService
    ){}
	
    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['apostilas-abaco']);
		return;
	}

	send() {
		this.loading = true;
		lastValueFrom(this.apostilasService.post(this.abaco))
		  .then(res => {
			  this.close()
		  })
		  .catch(res => {
			this.erro = res;
			console.error("console error" + res);
		  })
		  .finally(() => {
			  this.loading = false;
		  })
	  }

}
