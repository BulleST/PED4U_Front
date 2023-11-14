import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos.routing';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule ({
    declarations: [ 
        AlunosComponent,
        
    ],
    imports: [
        CommonModule,
        RouterModule,
        TableModule,
        TabViewModule,
        PanelMenuModule,
        AlunosRoutingModule
    ],
})

export class Alunosmodule {}