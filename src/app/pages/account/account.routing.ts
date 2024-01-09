import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
    { path: '', component: AccountComponent, children: [
        { path: '', redirectTo: 'login', pathMatch: 'prefix', },
        { path: 'login', component: LoginComponent},
        {
            path: 'login', component: LoginComponent    , children: [
                // { path: 'termos-de-uso', component: TermosDeUsoComponent },
            ]
        },
        {
            path: 'register', component: CreateAccountComponent, children: [
                // { path: 'termos-de-uso', component: TermosDeUsoComponent },
            ]
        },
    ]}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }