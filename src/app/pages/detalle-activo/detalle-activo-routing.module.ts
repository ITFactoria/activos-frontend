import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleActivoPage } from './detalle-activo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleActivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleActivoPageRoutingModule {}
