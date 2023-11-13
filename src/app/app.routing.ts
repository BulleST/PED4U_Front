import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const home = () => import ('./header-parts/home/home.module').then(res => res.HomeModule)
const listagemApostilas = () => import ('./pages/listagem-apostilas/apostilas-abaco.module').then(res => res.ApostilasAbacoModule)

const routes: Routes = [
  {
    path: 'home',
    loadChildren: home
  },

  {
    path: 'apostilas-abaco',
    loadChildren: listagemApostilas
  },

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
              
    exports: [RouterModule],
    
  })
  export class AppRoutingModule { }