import { UserService } from 'src/app/services/user.service';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronCircleLeft, faCreditCard, faKey } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subscription, lastValueFrom } from 'rxjs';
import { LoadingService } from 'src/app/parts/loading/loading';
import { AccountService } from 'src/app/services/account.service';
import { Modal, ModalService } from 'src/app/services/modal.service';
import { getError } from 'src/app/utils/error';
import { Usuario, UsuarioRequest } from 'src/app/models/usuario.model';
import { PerfilAcesso } from 'src/app/models/account-perfil.model';

@Component({
    selector: 'app-my-account',
    templateUrl: 'edit.component.html',
    styleUrls: ['edit.component.css']
})
export class EditComponent {
    faCreditCard = faCreditCard;
    open = true;
    faKey = faKey;
    faChevronCircleLeft = faChevronCircleLeft;
    objeto: UsuarioRequest = new UsuarioRequest(new Usuario);
    subscription: Subscription[] = [];
    loading = false;
    mensagemErro = '';
    erro: string = '';
    sucesso: string = '';
    perfis: PerfilAcesso [] = [];
    @ViewChild('template')
    template!: TemplateRef<any>;
    @ViewChild('icon')
    icon!: TemplateRef<any>;
    modal: Modal = new Modal;
    selectedPerfil: PerfilAcesso = new PerfilAcesso;


    constructor(
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute,
        private loadingUtils: LoadingService,
        private modalService: ModalService,
        private accountService: AccountService,
        private userService: UserService,
        private router: Router,
        private loadingHelper: LoadingService

    ) {
        console.log('entrei no constructor')
        this.loadingHelper.loading.subscribe(res => this.loading = res);
        var loading = this.userService.loading.subscribe(res => this.loading = res);
        this.subscription.push(loading);

        this.activatedRoute.params.subscribe(res => {
			if (res['id']) {
				this.objeto.id = res['id']
				// chamada da função get 
                // get captura informação do banco de dados utilizando a service
				lastValueFrom(this.userService.get(this.objeto.id))
					.then(usuario => {
						this.open = true;
						this.objeto = new UsuarioRequest(usuario);
                        this.selectedPerfil = usuario.perfilAcesso;
						this.loading = false;
					}).catch(res => {
						this.close();
						this.toastr.error('Não foi possível acessar essa página')
					})
			}
			else {
				this.close();
				this.toastr.error('Não foi possível acessar essa página')
			}
			console.log(res)
		})

        this.userService.listPerfil.subscribe((data) => {
            this.perfis = Object.assign([], data);

        })
        lastValueFrom(userService.getPerfilAcesso()).then(res => {
            this.perfis = res
        }) 
    }


     sendEmailPassword(){
        this.loading = true;
        lastValueFrom(this.userService.resetPassword(this.objeto.id))
        .then(res =>{
            console.log(res);
            this.sucesso = 'E-mail para troca de senha enviado com sucesso';
            this.loading = false;
        })
    }

    send(form: NgForm) {
        this.erro = '';
        this.loading = true;
        this.loadingUtils.loading.next(true);
        if (form.invalid) {
            this.erro = 'Formulário inválido';
            this.toastr.error('Formulário inválido');
            return;
        }
        this.objeto.perfilAcesso_Id = this.selectedPerfil.id
        console.log(this.objeto)
        console.log('entrou no objeto')
        lastValueFrom(this.userService.edit(this.objeto))
            .then(res => {
                lastValueFrom(this.userService.getList())
                this.close();
                this.loading = false;
            })
            .catch(res => {
                console.log(res)
                console.log('estamos no res')
                this.erro = getError(res);
                this.loading = false;
            })
    }

    // Fechar modal e retornar para rota de usuarios
	close(): void {
		this.open = false;
		this.router.navigate(['usuarios']);
		return;
	}


}