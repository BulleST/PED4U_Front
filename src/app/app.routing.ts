

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbacoModule } from './pages/abaco/abaco.module';

const home = () => import ('./header-parts/home/home.module').then(res => res.HomeModule)
const listAbaco = () => import ('./pages/abaco/abaco.module').then(res => AbacoModule)
const listAluno = () => import ('./pages/aluno/aluno.module').then(res => res.Alunomodule)

const routes: Routes = [
  {
    path: 'home',
    loadChildren: home
  },

  {
    path: 'abaco',
    loadChildren: listAbaco
  },

  {
    path: 'aluno',
    loadChildren: listAluno
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