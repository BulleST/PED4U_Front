import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AlunoService } from "src/app/services/aluno.service";
import { Aluno } from '../../aluno.model';
import { lastValueFrom } from "rxjs";
import { PerfilAluno } from '../../aluno.model';


@Component({
	selector: 'create-apostilas',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent{
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
		private httpClient: HttpClient
    ){}

    // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['alunos']);
		return;
	}

		// Função criada para salvar as informações inseridas na modal de cadastro
		async save() {
			this.loading = true;
			console.log(this.object)
			lastValueFrom(this.alunoService.post(this.object))
				.then(res => {
						this.close();
	
					})
				.catch(res => {
					this.erro = res;
					console.error("console catch" + res);
				})
				.finally(() => {
					this.loading = false;
				})
		}

		getList(){
			this.loading = true;
			lastValueFrom(this.alunoService.get(this.id))
			// .then(res =>{
			// 	if(res.success){
			// 		this.close()
			// 		this.toastr.success('Operação concluída com sucesso')
			// 	}
			// 	else{
			// 		this.erro = res.message
			// 		this.toastr.error(res.message)
			// 	}
		}
	

	
	
}
