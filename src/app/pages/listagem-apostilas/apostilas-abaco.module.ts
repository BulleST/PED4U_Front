import { ApostilasAbacoRoutingModule } from "./apostilas-abaco.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ApostilasAbacoComponent  } from "./apostilas-abaco.component";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import { CardModule } from "primeng/card";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { CreateApostilasComponent } from "./create/create-apostilas.component";
import { EditApostilasComponent } from "./edit/edit-apostilas.component";
import { DeleteApostilasComponent } from "./delete/delete-apostilas.component";
import { TagModule } from 'primeng/tag';
import { ToastrModule } from "ngx-toastr";

@NgModule ({
    declarations: [ 
        ApostilasAbacoComponent,
        CreateApostilasComponent,
        EditApostilasComponent,
        DeleteApostilasComponent
        
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
        ToastrModule
    ],
})

export class ApostilasAbacoModule {}