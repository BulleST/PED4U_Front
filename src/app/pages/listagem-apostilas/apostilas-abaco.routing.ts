
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApostilasAbacoComponent} from "./apostilas-abaco.component";
import { CreateApostilasComponent } from "./create/create-apostilas.component";
import { EditApostilasComponent } from "./edit/edit-apostilas.component";
import { DeleteApostilasComponent } from "./delete/delete-apostilas.component";


const routes: Routes = [
    {
        path: '', component: ApostilasAbacoComponent, children: [
            {path: 'cadastrar', component: CreateApostilasComponent},
            {path: 'editar/:ApostilaAbaco_id', component: EditApostilasComponent},
            {path: 'excluir/:ApostilaAbaco_id', component: DeleteApostilasComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ApostilasAbacoRoutingModule {}