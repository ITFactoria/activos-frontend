import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'detalle-activo/:idActivo',
    loadChildren: () => import('./pages/detalle-activo/detalle-activo.module').then(m => m.DetalleActivoPageModule)
  },
  {
    path: 'partes-activo',
    loadChildren: () => import('./pages/partes-activo/partes-activo.module').then( m => m.PartesActivoPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
