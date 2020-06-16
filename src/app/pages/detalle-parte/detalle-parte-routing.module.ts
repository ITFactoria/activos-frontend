import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePartePage } from './detalle-parte.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePartePageRoutingModule {}
