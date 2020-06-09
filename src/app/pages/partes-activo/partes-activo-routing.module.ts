import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartesActivoPage } from './partes-activo.page';

const routes: Routes = [
  {
    path: '',
    component: PartesActivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartesActivoPageRoutingModule {}
