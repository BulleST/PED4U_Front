

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const home = () => import ('./header-parts/home/home.module').then(res => res.HomeModule)
const listAbaco = () => import ('./pages/abaco/abaco.module').then(res => res.AbacoModule)
const listAluno = () => import ('./pages/aluno/aluno.module').then(res => res.Alunomodule)
const listEducadores = () => import ('./pages/educadores/educadores.module').then(res => res.EducadoresModule)

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
    path: 'educadores',
    loadChildren: listEducadores
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