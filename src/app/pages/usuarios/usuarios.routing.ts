
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './list/create/create.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { EditComponent } from './list/edit/edit.component';


const routes: Routes = [
     { path: '', component: ListComponent, children: [
                    { 
                      path: 'register', component: CreateComponent, children: [
                        { path: 'termos-de-uso', component: TermosDeUsoComponent}
                      ]
                    },
                    { 
                      path: 'editar/:id', component: EditComponent
                    },
                   
                    
                    
        //         { path: 'cadastrar', component: FormComponent, data: { modalOrder: 1 }, title: 'Zentech - Cadastrar usuário' },
        //         { path: 'editar/:usuario_id', component: FormComponent, data: { modalOrder: 1 }, title: 'Zentech - Editar usuário', canActivate: [UserEditableAuth] },
        //         { path: 'excluir/:usuario_id', component: DeleteComponent, data: { modalOrder: 1,  roles: [ Role.Admin ] }, title: 'Zentech - Excluir usuário', canActivate: [UserEditableAuth, RoleGuard] },
        //         { path: 'reset-password/:usuario_id', component: ResetPasswordComponent, data: { modalOrder: 1 }, title: 'Zentech - Resetar senha', canActivate: [UserEditableAuth] },
        //         { path: 'habilitar/:usuario_id', component: DeactivatedComponent, data: { modalOrder: 1 }, title: 'Zentech - Habilitar usuário', canActivate: [UserEditableAuth] },
        //         { path: 'desabilitar/:usuario_id', component: DeactivatedComponent, data: { modalOrder: 1 }, title: 'Zentech - Desabilitar usuário', canActivate: [UserEditableAuth] },
        //         MyAccountRouter,
            ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }