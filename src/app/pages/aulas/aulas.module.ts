
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AulasComponent } from "./aulas.component";
import { AulasRoutingmodule } from './aulas.routing';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { LancarAula } from "./lançar aula/lancar-aula.component";
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { CreateAulaComponent } from "./create/create.component";
import { CalendarModule } from 'primeng/calendar';
import { EditComponent } from "./edit/edit.component";


@NgModule ({
    declarations: [ 
        AulasComponent,
        LancarAula,
        CreateAulaComponent,
        EditComponent
        
       
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
        InputNumberModule,
        CalendarModule
        
    
    ],
})

export class AulasModule {}