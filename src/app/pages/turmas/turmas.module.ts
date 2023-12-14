import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import { CardModule } from "primeng/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { TurmasComponent } from "./turmas.component";
import { TagModule } from 'primeng/tag';
import { ToastrModule } from "ngx-toastr";
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask'
import { TurmasRoutingModule } from "./turmas.routing";
import { CreateComponent } from "./list/create/create.component";
import { EditComponent } from "./list/edit/edit.component";
import { MultiSelectModule } from 'primeng/multiselect';




const maskConfigFunction: () => Partial<IConfig> = () => {
    return {
      validation: true,
    };
  };
@NgModule ({
    declarations: [ 
        TurmasComponent,
        CreateComponent,
        EditComponent
        
    ],
    imports: [
        TurmasRoutingModule,
        CommonModule,
        RouterModule,
        TableModule,
        TabViewModule,
        PanelMenuModule,
        FormsModule,
        NgbModule,
        CardModule,
        DropdownModule,
        ProgressSpinnerModule,
        TagModule,
        ToastrModule,
        NgxMaskDirective,
        NgxMaskPipe,
        MultiSelectModule
    ],

    providers: [
        provideEnvironmentNgxMask(maskConfigFunction)
    ]
})

export class TurmasModule {}