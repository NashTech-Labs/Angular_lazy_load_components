import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
  {path:'book' , loadComponent:()=>import('./book/book.component').then(m=>m.BookComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
