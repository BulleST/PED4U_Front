

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const home = () => import ('./header-parts/home/home.module').then(res => res.HomeModule)
const listAbaco = () => import ('./pages/abaco/abaco.module').then(res => res.AbacoModule)
const listAluno = () => import ('./pages/aluno/aluno.module').then(res => res.Alunomodule)
const listEducadores = () => import ('./pages/educadores/educadores.module').then(res => res.EducadoresModule)
const listPerfis = () => import ('./pages/perfis/perfis.module').then( res => res.PerfisModule)
const listTurmas = () => import ('./pages/turmas/turmas.module').then( res => res.TurmasModule)
const listAulas = () => import ('./header-parts/aulas/aulas.module').then ( res => res.AulasModule)
const listReposicao = () => import ('./header-parts/reposicao/reposicao.module').then ( res => res.ReposicaoModule)



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
    path: 'perfis',
    loadChildren: listPerfis
  },

  {
    path: 'turmas',
    loadChildren: listTurmas
  },

  {
    path: 'aulas',
    loadChildren: listAulas
  },

  {
    path: 'reposicao',
    loadChildren: listReposicao
  },
  
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: '', redirectTo: 'aulas', pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
              
    exports: [RouterModule],
    
  })
  export class AppRoutingModule { }