
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EducadoresRoutingModule } from "./educadores.routing";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import { CardModule } from "primeng/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { EducadoresComponent } from "./educadores.component";
import { TagModule } from 'primeng/tag';
import { ToastrModule } from "ngx-toastr";
import { IConfig} from 'ngx-mask'
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
       EducadoresComponent,
       CreateComponent,
       EditComponent,
       DeleteComponent
        
    ],
    imports: [
        EducadoresRoutingModule,
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
       
    ],

    providers: [
       
    ]
})

export class EducadoresModule {}