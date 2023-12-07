

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EducadoresComponent } from "./educadores.component";
import { CreateComponent } from "./list/create/create.component";
import { EditComponent } from "./list/edit/edit.component";
import { DeleteComponent } from "./list/delete/delete.component";


const routes: Routes = [
    {
        path: '', component: EducadoresComponent, children: [
            {path: 'cadastrar', component: CreateComponent},
            {path: 'editar/:id', component: EditComponent},
            {path: 'excluir/:id', component: DeleteComponent}
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EducadoresRoutingModule {}