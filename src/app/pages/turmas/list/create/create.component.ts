
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { Turma } from "../../turmas.model";
import { PerfilAluno } from "src/app/models/aluno.model";
import { TurmasService } from "src/app/services/turmas.service";
import { PerfilService } from "src/app/services/perfil.service";

@Component({
	selector: 'create-alunos',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})

export class CreateComponent{
    open = true;
    object: Turma = new Turma;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	perfis: PerfilAluno [] = [];
	diaTurma: string [] = [
		'Segunda-Feira',
		'Terça-Feira',
		'Quarta-Feira',
		'Quinta-Feira',
		'Sexta-Feira',
		'Sábado'
	  ];
	  nome: string [] = [
		'Lucas',
		'Marina',
		'Luana',
		'Antônio',
		'Letícia'
	  ]
	
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
