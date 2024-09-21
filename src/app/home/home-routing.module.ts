import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
  // ,
  // {
  //   path: 'recipe-detail',
  //   loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
