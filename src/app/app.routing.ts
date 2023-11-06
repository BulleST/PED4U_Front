import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const home = () => import ('./pages/home/home.module').then(res => res.HomeModule)

const routes: Routes = [
  {
    path: 'home',
    loadChildren: home
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