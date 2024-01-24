
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { TurmasService } from "src/app/services/turmas.service";
import { PerfilService } from "src/app/services/perfil.service";
import { DiaSemana, Turma, TurmaCadastro } from "src/app/models/turmas.model";
import { Perfil } from "src/app/models/perfis.model";
import { Educador } from "src/app/models/educador.model";


@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent{
    open = true;
    object: TurmaCadastro = new TurmaCadastro;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	perfis: Perfil [] = [];
	diaSemana: DiaSemana [] = [
		{id: 1 , nome: 'Segunda-Feira'},
		{id: 2 , nome: 'Terça-Feira'},
		{id: 3 , nome: 'Quarta-Feira'},
		{id: 4 , nome: 'Quinta-Feira'},
		{id: 5 , nome: 'Sexta-Feira'},
		{id: 5 , nome: 'Sábado'}
	  ];
	  educadores: Educador [] = [
		{id: 0, nome: 'Lucas', celular: 0, idade: 0, email: '', genero: ''},
		{id: 0, nome: 'Marina', celular: 0, idade: 0, email: '', genero: ''},
		{id: 0, nome: 'Luana', celular: 0, idade: 0, email: '', genero: ''},
		{id: 0, nome: 'Antônio', celular: 0, idade: 0, email: '', genero: ''},
		{id: 0, nome: 'Letícia', celular: 0, idade: 0, email: '', genero: ''},
	  ];
	  selectedPerfis: string[] = [];
	
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private turmasService: TurmasService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
		private perfilService: PerfilService
    ){
		this.perfilService.list.subscribe((data) => {
			this.perfis = Object.assign([], data);
			console.log('perfis', data)
		  })
		  lastValueFrom(perfilService.getList())
	}

    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['turmas']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		
		console.log(this.object)
		lastValueFrom(this.turmasService.post(this.object))
			.then(res => {
				if (res.success) {
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.turmasService.getList())
				}
				else {
					this.erro = res.message
					this.toastr.error(res.message)
				}
				this.loading = false;
			})
			.catch(res => {
				this.erro = res;
				console.error("console catch" + res);
			})
			.finally(() => {
				this.loading = false;
			})
	}

}
