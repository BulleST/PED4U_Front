import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos.routing';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TagModule } from 'primeng/tag';
import { CreateAlunosComponent } from './create/create-alunos.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

@NgModule ({
    declarations: [ 
        AlunosComponent,
        CreateAlunosComponent,
        
    ],
    imports: [
        CommonModule,
        RouterModule,
        TableModule,
        TabViewModule,
        PanelMenuModule,
        AlunosRoutingModule,
        TagModule,
        FormsModule,
        CheckboxModule,
        DropdownModule
    ],
})

export class Alunosmodule {}