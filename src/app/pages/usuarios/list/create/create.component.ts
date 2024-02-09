import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronCircleLeft, faEnvelope, faLock, faPhone, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/parts/alert/alert.service';
import { LoadingService } from 'src/app/parts/loading/loading';
import { Subscription, lastValueFrom } from 'rxjs';
import { getError } from 'src/app/utils/error';
import { PerfilAcesso } from 'src/app/models/account-perfil.model';
import { UserService } from 'src/app/services/user.service';
import { Usuario, UsuarioRequest } from 'src/app/models/usuario.model';


@Component({
    selector: 'app-create-account',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnDestroy {
    faChevronCircleLeft = faChevronCircleLeft;
    faEnvelope = faEnvelope;
    faLock = faLock;
    faUnlock = faUnlock;
    faUser = faUser;
    faPhone = faPhone;
    open = true;
    objeto =  new UsuarioRequest(new Usuario);
    loading: boolean = false;
    erro = '';
    subscription: Subscription[] = [];
    perfis: PerfilAcesso [] = [];
    emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    selectedPerfil: PerfilAcesso = new PerfilAcesso;
    constructor(
        private toastr: ToastrService,
        private router: Router,
        private loadingUtils: LoadingService,
        private accountService: AccountService,
        private alertService: AlertService,
        private userService: UserService

    ) { 
        var loading = this.loadingUtils.loading.subscribe(res => this.loading = res);
        this.subscription.push(loading);

        console.log('estou sendo construido')
        this.userService.listPerfil.subscribe((data) => {
            this.perfis = Object.assign([], data);

        })
        lastValueFrom(userService.getPerfilAcesso()).then(res => {
            this.perfis = res
        }) 
    }

    ngOnDestroy(): void {
        this.subscription.forEach(item => item.unsubscribe());
    }

    send(form: NgForm) {
        this.loadingUtils.loading.next(true);
        this.objeto.perfilAcesso_Id = this.selectedPerfil.id;
        lastValueFrom(this.userService.create(this.objeto))
        .then(res => {
            console.log(res)
            if(res.id){
                lastValueFrom(this.userService.resetPassword(res.id))
            }
            lastValueFrom(this.userService.getList())
            this.close();
            this.loading = false;
        })
        .catch(res => {
            this.loadingUtils.loading.next(false);
            this.erro = getError(res);
        });
    }

      // Fechar modal e retornar para rota de usuarios
	close(): void {
		this.open = false;
		this.router.navigate(['usuarios']);
		return;
	}

}