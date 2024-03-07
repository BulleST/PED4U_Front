import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AulasComponent } from "./aulas.component";
import { CreateComponent } from "./list/create/create.component";
import { LancarAula } from "./list/lancar_aula/lancar_aula.component";
import { CreateAulaComponent } from "./list/lancar_aula/create/create.component";


const routes: Routes = [
    {
        path: '', component: AulasComponent, children: [
            {path: 'cadastrar', component: CreateComponent},
            {path: 'lancar/:turma_id', component: LancarAula, children: [
                { path: 'cadastrar-aula', component: CreateAulaComponent },
            ]},
         
        ]
            
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AulasRoutingmodule {}