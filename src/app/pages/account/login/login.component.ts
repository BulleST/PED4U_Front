import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { lastValueFrom } from 'rxjs';
import { Login } from 'src/app/models/account.model';
import { LoadingService } from 'src/app/parts/loading/loading';
import { AccountService } from 'src/app/services/account.service';
import { getError } from 'src/app/utils/error';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    login = new Login;
    loading: boolean = false;
    rememberMe: boolean = false;
    showHide: boolean = false;
    erro = '';
    emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    faEnvelope = faEnvelope;
    faLock = faLock;
    faUnlock = faUnlock;

    constructor(
        private accountService: AccountService,
        private loadingHelper: LoadingService,
    ) {
        this.loadingHelper.loading.subscribe(res => this.loading = res);

        console.log('estou sendo construido')
    }

    send() {
        this.loadingHelper.loading.next(true);
        lastValueFrom(this.accountService.login(this.login))
            .then(res => { })
            .catch(res => {
                this.erro = getError(res)
            });
    }

}