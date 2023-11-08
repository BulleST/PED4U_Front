
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemApostilas} from "./listagem-apostilas.component"

const routes: Routes = [
    {
        path: '', component: ListagemApostilas
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ListagemApostilasRoutingModule {}