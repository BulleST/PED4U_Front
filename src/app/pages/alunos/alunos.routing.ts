
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { CreateAlunosComponent } from "./create/create-alunos.component";


const routes: Routes = [
    {
        path: '', component: AlunosComponent, children: [
            {path: 'cadastrar', component: CreateAlunosComponent},
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlunosRoutingModule {}