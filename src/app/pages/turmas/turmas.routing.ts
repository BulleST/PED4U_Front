import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TurmasComponent } from "./turmas.component";
import { CreateComponent } from "./list/create/create.component";



const routes: Routes = [
    {
        path: '', component: TurmasComponent, children: [
            {path: 'cadastrar', component: CreateComponent},
            // {path: 'editar/:id', component: EditComponent},
            // {path: 'excluir/:id', component: DeleteComponent}
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TurmasRoutingModule {}