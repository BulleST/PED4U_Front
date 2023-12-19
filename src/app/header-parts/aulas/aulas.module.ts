
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AulasComponent } from './aulas.component';
import { AulasRoutingmodule } from './aulas.routing';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@NgModule ({
    declarations: [ 
        AulasComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AulasRoutingmodule,
        TabViewModule,
        TableModule,
        TagModule,
        ButtonModule
    ],
})

export class AulasModule {}