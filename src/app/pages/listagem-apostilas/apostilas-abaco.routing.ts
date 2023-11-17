
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApostilasAbacoComponent} from "./apostilas-abaco.component";
import { CreateApostilasComponent } from "./create/create-apostilas.component";


const routes: Routes = [
    {
        path: '', component: ApostilasAbacoComponent, children: [
            {path: 'cadastrar', component: CreateApostilasComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ApostilasAbacoRoutingModule {}