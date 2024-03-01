
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AulasComponent } from "./aulas.component";
import { AulasRoutingmodule } from './aulas.routing';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CreateComponent } from "./list/create/create.component";
import { EditComponent } from "./list/lancar_aula/edit.component";
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DeleteComponent } from "./list/delete/delete.component";



@NgModule ({
    declarations: [ 
        AulasComponent,
        CreateComponent,
        EditComponent,
        DeleteComponent
       
    ],
    imports: [
        CommonModule,
        RouterModule,
        AulasRoutingmodule,
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

export class AulasModule {}