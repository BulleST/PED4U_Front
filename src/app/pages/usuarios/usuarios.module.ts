import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios.routing';
// import { ListComponent } from './list/list.component';
// import { FormComponent } from './form/form.component';
// import { DeleteComponent } from './delete/delete.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { DeactivatedComponent } from './deactivated/deactivated.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from "primeng/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { ToastrModule } from "ngx-toastr";
import { IConfig} from 'ngx-mask'
import { CreateComponent } from './list/create/create.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { EditComponent } from './list/edit/edit.component';
import { DeleteComponent } from './list/delete/delete.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    TermosDeUsoComponent

  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FontAwesomeModule,
    TableModule,
    TabViewModule,
    CardModule,
    NgbModule,
    ToastrModule,
    FormsModule,
    DropdownModule,
    

  ]
})
export class UsuariosModule { }