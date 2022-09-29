import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Accueil',
    pathMatch: 'full'
  },
  {
    path: 'Accueil',
    loadChildren: () => import('./views/Accueil/accueil.module').then(m => m.AccueilPageModule)
  },
  {
    path: 'Panier',
    loadChildren: () => import('./views/Panier/panier.module').then(m => m.PanierPageModule)
  },
  {
    path: 'Salade',
    loadChildren: () => import('./views/Salade/salade.module').then(m => m.SaladePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
