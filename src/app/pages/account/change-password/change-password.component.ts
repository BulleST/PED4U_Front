import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronCircleLeft, faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';
import {     ToastrService } from 'ngx-toastr';
import { Subscription, lastValueFrom } from 'rxjs';
import { Account, ChangePassword } from 'src/app/models/account.model';
import { LoadingService } from 'src/app/parts/loading/loading';
import { AccountService } from 'src/app/services/account.service';

import { getError } from 'src/app/utils/error';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {
    faKey= faKey;
    faChevron = faChevronCircleLeft;
    open = true;
    objeto: ChangePassword = new ChangePassword;
    loading = false;
    erro = '';
    account?: Account;
    subscription: Subscription[] = [];
    @ViewChild('template')
    template!: TemplateRef<any>;
    @ViewChild('icon')
    icon!: TemplateRef<any>;
   

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
        private loadingUtils: LoadingService,
        private accountService: AccountService,
      
        ) { 
    }


   // Fechar modal e retornar para rota de estabelecimento
	close(): void {
		this.open = false;
		this.router.navigate(['my-account']);
		return;
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
        if (this.objeto.confirmPassword != this.objeto.password) {
            this.erro = 'Senha e confirmação de senha devem ser iguais';
            this.toastr.error('Senha e confirmação de senha devem ser iguais');
            return;
        }
        lastValueFrom(this.accountService.changePassword(this.objeto))
        .then(res => {
            this.close();
        })
        .catch(res => {
            this.erro = getError(res);
        })
        .finally(() => {
            this.loading = false;
        })

        setTimeout(() => {
            this.loading = false;
            this.loadingUtils.loading.next(false);
        }, 300);}
}
