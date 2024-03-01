import { AlunoComponent } from './aluno.component';
import { AlunosRoutingModule } from './aluno.routing';
import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TagModule } from 'primeng/tag';
import { CreateComponent } from './list/create/create.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { EditComponent } from './list/edit/edit.component';
import { ToastrModule } from "ngx-toastr";
import { IConfig } from 'ngx-mask'
import { DeleteComponent } from './list/delete/delete.component';
import { CalendarModule } from 'primeng/calendar';

const maskConfigFunction: () => Partial<IConfig> = () => {
    return {
      validation: true,
    };
  };

@NgModule ({
    declarations: [ 
        AlunoComponent,
        CreateComponent,
        EditComponent,
        DeleteComponent
        
        
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
        DropdownModule,
        ToastrModule,
        CalendarModule,
       
   
    ],

    providers: [
      { provide: LOCALE_ID, useValue: 'pt-BR' }
    ]
})

export class Alunomodule {}