import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronCircleLeft, faCreditCard, faKey } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Subscription, lastValueFrom } from 'rxjs';
import { Account } from 'src/app/models/account.model';
import { LoadingService } from 'src/app/parts/loading/loading';
import { AccountService } from 'src/app/services/account.service';
import { Modal, ModalService } from 'src/app/services/modal.service';
import { getError } from 'src/app/utils/error';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['my-account.component.css']
})
export class MyAccountComponent implements OnDestroy {
    faCreditCard = faCreditCard;
    faKey = faKey;
    faChevronCircleLeft = faChevronCircleLeft;
    objeto: Account = new Account;
    subscription: Subscription[] = [];
    loading = false;
    mensagemErro = '';
    erro: string = '';

    @ViewChild('template')
    template!: TemplateRef<any>;
    @ViewChild('icon')
    icon!: TemplateRef<any>;
    modal: Modal = new Modal;


    constructor(
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute,
        private loadingUtils: LoadingService,
        private modalService: ModalService,
        private accountService: AccountService

    ) {
        console.log('entrei no constructor myAccount')
    }

    ngOnDestroy(): void {
        this.subscription.forEach(item => item.unsubscribe());
    }

    ngAfterViewInit(): void {
        var account = this.accountService.accountSubject.subscribe(res => {
            if (!res) {}
            else {
                this.objeto = res;
                setTimeout(() => {
                    this.modal = this.modalService.addModal(this.modal, 'minha-conta');
                }, 200);
            }
        });
        this.subscription.push(account);
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
        lastValueFrom(this.accountService.updateAccount(this.objeto))
            .then(res => {
                this.loading = false;
            })
            .catch(res => {
                this.erro = getError(res);
                this.loading = false;
            })
    }
}
