import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PerfisRoutingModule } from "./perfis.routing";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import { CardModule } from "primeng/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { PerfisComponent } from "./perfis.component";
import { TagModule } from 'primeng/tag';
import { ToastrModule } from "ngx-toastr";
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask'
import { CreateComponent } from "./list/create/create.component";
import { EditComponent } from "./list/edit/edit.component";
import { DeleteComponent } from "./list/delete/delete.component";



const maskConfigFunction: () => Partial<IConfig> = () => {
    return {
      validation: true,
    };
  };
@NgModule ({
    declarations: [ 
       PerfisComponent,
       CreateComponent,
       EditComponent,
       DeleteComponent
     
        
    ],
    imports: [
        PerfisRoutingModule,
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
        NgxMaskPipe
    ],

    providers: [
        provideEnvironmentNgxMask(maskConfigFunction)
    ]
})

export class PerfisModule {}