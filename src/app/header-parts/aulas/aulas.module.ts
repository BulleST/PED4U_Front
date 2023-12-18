
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AulasComponent } from './aulas.component';
import { AulasRoutingmodule } from './aulas.routing';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

@NgModule ({
    declarations: [ 
        AulasComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AulasRoutingmodule,
        TabViewModule,
        TableModule
    ],
})

export class AulasModule {}