import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleActivoPage } from './detalle-activo.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DetalleActivoPage
  // }
  {
    path: '',
    component: DetalleActivoPage,
    children:[
      {
        path: 'list',
        loadChildren:'../partes-activo/partes-activo.module#PartesActivoPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleActivoPageRoutingModule {}
