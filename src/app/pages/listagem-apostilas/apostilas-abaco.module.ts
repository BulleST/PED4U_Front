import { ApostilasAbacoRoutingModule } from "./apostilas-abaco.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ApostilasAbacoComponent  } from "./apostilas-abaco.component";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule ({
    declarations: [ 
        ApostilasAbacoComponent,
        
    ],
    imports: [
        CommonModule,
        RouterModule,
        ApostilasAbacoRoutingModule,
        TableModule,
        TabViewModule,
        PanelMenuModule
    ],
})

export class ApostilasAbacoModule {}