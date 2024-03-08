import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AulasComponent } from "./aulas.component";

import { LancarAula } from "./list/lançar aula/lancar-aula.component";
import { CreateAulaComponent } from "./list/lançar aula/create/create.component";
import { ListagemAlunos } from "./list/lançar aula/listagem_alunos/listagem-alunos.component";


const routes: Routes = [
    {
        path: '', component: AulasComponent, children: [    
            {path: 'lancar/:turma_id', component: LancarAula, children: [
                { path: 'cadastrar-aula', component: CreateAulaComponent, children: [
                    { path: 'listagem-alunos', component: ListagemAlunos }
                ]},
            ]},
        ]
            
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AulasRoutingmodule {}