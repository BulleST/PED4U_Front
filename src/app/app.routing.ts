import { Alunos } from './pages/alunos/alunos.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const home = () => import ('./header-parts/home/home.module').then(res => res.HomeModule)
const listApostilas = () => import ('./pages/listagem-apostilas/apostilas-abaco.module').then(res => res.ApostilasAbacoModule)
const listAlunos = () => import ('./pages/alunos/alunos.module').then(res => res.Alunosmodule)

const routes: Routes = [
  {
    path: 'home',
    loadChildren: home
  },

  {
    path: 'apostilas-abaco',
    loadChildren: listApostilas
  },

  {
    path: 'alunos',
    loadChildren: listAlunos
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