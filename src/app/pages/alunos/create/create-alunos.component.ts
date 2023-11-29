import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AlunosService } from "src/app/services/alunos.service";
import { Alunos } from "../alunos.model";
import { lastValueFrom } from "rxjs";


@Component({
	selector: 'create-apostilas',
	templateUrl: './create-alunos.component.html',
	styleUrls: ['./create-alunos.component.css']
})

export class CreateAlunosComponent{
    open = true;
    alunos: Alunos = new Alunos;
    id: number = 0;
	erro = '';
	loading: boolean = true;
	generos: string[] = [
		'Masculino',
		'Feminino',
		'Outros'
	];
	vigencia: string [] = [
		'Ativo',
		'Inativo'
	]


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private alunosService: AlunosService,
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
			console.log(this.alunos)
			lastValueFrom(this.alunosService.post(this.alunos))
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
			lastValueFrom(this.alunosService.get(this.id))
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
