

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReposicaoComponent } from "./reposicao.component";
import { ReposicaoRoutingmodule } from './reposicao.routing';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule ({
    declarations: [ 
        ReposicaoComponent,
        // CreateComponent,
        // EditComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReposicaoRoutingmodule,
        TabViewModule,
        TableModule,
        TagModule,
        ButtonModule,
        FormsModule,
        CheckboxModule,
        DropdownModule,
        RadioButtonModule,
        SelectButtonModule,
        ToggleButtonModule,
        InputNumberModule
        
    
    ],
})

export class ReposicaoModule {}