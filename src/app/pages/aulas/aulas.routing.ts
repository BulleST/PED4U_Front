import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AulasComponent } from "./aulas.component";
import { LancarAula } from "./lançar aula/lancar-aula.component";
import { CreateAulaComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";



const routes: Routes = [
    {
        path: '', component: AulasComponent, children: [    
            { path: 'lancar/:turma_id', component: LancarAula, children: [
                { path:'editar-aula/:aula_id', component: EditComponent},
                { path: 'cadastrar-aula', component: CreateAulaComponent},
            ]},
            
        ]
            
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AulasRoutingmodule {}