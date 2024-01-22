import { ApostilasAbacoRoutingModule } from "./apostilas-abaco.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AbacoComponent  } from "./abaco.component";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import { CardModule } from "primeng/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { CreateComponent } from "./list/create/create.component";
import { EditComponent } from "./list/edit/edit.component";
import { DeleteComponent } from "./list/delete/delete.component";
import { TagModule } from 'primeng/tag';
import { ToastrModule } from "ngx-toastr";
import { IConfig } from 'ngx-mask'



const maskConfigFunction: () => Partial<IConfig> = () => {
    return {
      validation: true,
    };
  };
@NgModule ({
    declarations: [ 
        AbacoComponent,
        CreateComponent,
        EditComponent,
        DeleteComponent
        
    ],
    imports: [
        CommonModule,
        RouterModule,
        ApostilasAbacoRoutingModule,
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

export class AbacoModule {}