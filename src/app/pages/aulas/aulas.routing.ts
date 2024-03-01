import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AulasComponent } from "./aulas.component";
import { CreateComponent } from "./list/create/create.component";
import { EditComponent } from "./list/lancar_aula/edit.component";
import { DeleteComponent } from "./list/delete/delete.component";

const routes: Routes = [
    {
        path: '', component: AulasComponent, children: [
            {path: 'cadastrar', component: CreateComponent},
            {path: 'lancar/:id', component: EditComponent},
            {path: 'excluir/:id', component: DeleteComponent}
        ]
            
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AulasRoutingmodule {}