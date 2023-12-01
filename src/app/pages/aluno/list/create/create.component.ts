
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AlunoService } from "src/app/services/aluno.service";
import { Aluno, PerfilAluno } from "../../aluno.model";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'create-alunos',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})

export class CreateComponent{
    open = true;
    object: Aluno = new Aluno;
    id: number = 0;
	erro = '';
	loading: boolean = false;
	generos: string[] = [
		'Masculino',
		'Feminino',
		'Outros'
	];
	vigencia: string [] = [
		'Ativo',
		'Inativo'
	];
	perfis: object [] = [];
	perfil: PerfilAluno = new PerfilAluno;


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alunoService: AlunoService,
		private httpClient: HttpClient,
		private toastr: ToastrService,
    ){

		lastValueFrom(this.alunoService.getListPerfil()).then( res => {
			this.perfis = Object.assign([], res);
		});
		lastValueFrom(this.alunoService.getList())

		
	}

    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['aluno']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	async save() {
		this.loading = true;
		this.object.perfilAluno = this.perfil.nome;
		console.log(this.object)
		lastValueFrom(this.alunoService.post(this.object))
			.then(res => {
				if (res.success) {
					this.close()
					this.toastr.success('Operação concluída com sucesso')
					lastValueFrom(this.alunoService.getList())
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
