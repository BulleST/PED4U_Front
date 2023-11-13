
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApostilasAbacoComponent} from "./apostilas-abaco.component"

const routes: Routes = [
    {
        path: '', component: ApostilasAbacoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ApostilasAbacoRoutingModule {}