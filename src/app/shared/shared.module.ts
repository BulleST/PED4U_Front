import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from "primeng/table";
import { ToastrModule } from "ngx-toastr";
import { DropdownModule } from "primeng/dropdown";
import { NgxMaskModule } from 'ngx-mask';
import { CalendarModule } from "primeng/calendar";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { MyAccountComponent } from "./my account/my-account.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

@NgModule({
    declarations: [
        MyAccountComponent,
        ChangePasswordComponent

    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule,
        FontAwesomeModule,
        TableModule,
        ToastrModule,
        DropdownModule,
        NgxMaskModule,
        CalendarModule,
        TabViewModule,
        OverlayPanelModule,
        DialogModule
    ],
    providers:[],

})

export class SharedModule {

}