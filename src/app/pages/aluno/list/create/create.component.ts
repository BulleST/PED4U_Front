import { PerfilService } from './../../../../services/perfil.service';
import { AlunoService } from "src/app/services/aluno.service";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Aluno} from "src/app/models/aluno.model";
import { Perfil } from "src/app/models/perfis.model";
import { lastValueFrom } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { TurmasService } from 'src/app/services/turmas.service';
import { Turma } from 'src/app/models/turmas.model';




@Component({
	selector: 'create-alunos',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})

export class CreateComponent{
    open = true;
    aluno: Aluno = new Aluno;
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
	perfis: Perfil [] = [];
	turmas: Turma [] = [];
	
	
	


	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private alunoService: AlunoService,
		private toastr: ToastrService,
		private http: HttpClient,
		private perfilService: PerfilService,
		private turmasService: TurmasService
	) { 
		this.perfilService.list.subscribe((data) => {
			this.perfis = Object.assign([], data);
		})
		lastValueFrom(perfilService.getList());

		this.turmasService.list.subscribe((data) =>{
			this.turmas = Object.assign([], data)
		})
		lastValueFrom(turmasService.getList());
	}

	// Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['aluno']);
		return;
	}

	// Função criada para salvar as informações inseridas na modal de cadastro
	 save() {
		this.loading = true;
		console.log(this.aluno)
		lastValueFrom(this.alunoService.post(this.aluno))
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