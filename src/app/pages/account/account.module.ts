import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account.routing';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountComponent } from './account.component';
// import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    CreateAccountComponent,
    TermosDeUsoComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MyAccountComponent,
    ChangePasswordComponent

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ToastrModule,
    CheckboxModule,
    FontAwesomeModule,
    DividerModule,
    ButtonModule,
    TableModule
  ],
  bootstrap: [AccountComponent],
})
export class AccountModule { }