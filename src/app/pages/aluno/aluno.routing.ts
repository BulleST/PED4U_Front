
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunoComponent } from "./aluno.component";
import { CreateComponent } from "./list/create/create.component";
import { EditComponent } from "./list/edit/edit.component";
import { DeleteComponent } from "./list/delete/delete.component";


const routes: Routes = [
    {
        path: '', component: AlunoComponent, children: [
            {path: 'cadastrar', component: CreateComponent},
            {path: 'edit:id', component: EditComponent},
            {path: 'excluir: id', component: DeleteComponent}
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlunosRoutingModule {}