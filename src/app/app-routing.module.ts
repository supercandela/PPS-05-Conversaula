import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
 
 
const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
        canMatch: [authGuard]
      }
    ]
  },
  {
    path: 'chat',
    children: [
      {
        path: ':salaId',
        loadChildren: () => import('./chat/chat.module').then( m => m.ChatModule),
        canMatch: [authGuard]
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}