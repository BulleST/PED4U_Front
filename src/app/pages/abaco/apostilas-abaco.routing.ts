
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AbacoComponent} from "./abaco.component";
import { CreateComponent } from "./list/create/create.component";
import { EditComponent } from "./list/edit/edit.component";
import { DeleteComponent } from "./list/delete/delete.component";


const routes: Routes = [
    {
        path: '', component: AbacoComponent, children: [
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
  export class ApostilasAbacoRoutingModule {}