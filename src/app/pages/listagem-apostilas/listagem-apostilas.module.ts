import { ListagemApostilasRoutingModule } from "./listagem-apostilas.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ListagemApostilas } from "./listagem-apostilas.component";
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

@NgModule ({
    declarations: [ 
        ListagemApostilas,
        
    ],
    imports: [
        CommonModule,
        RouterModule,
        ListagemApostilasRoutingModule,
        TableModule,
        TabViewModule
    ],
})

export class ListagemApostilasModule {}