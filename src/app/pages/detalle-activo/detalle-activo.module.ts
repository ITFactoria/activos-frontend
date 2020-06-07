import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleActivoPageRoutingModule } from './detalle-activo-routing.module';

import { DetalleActivoPage } from './detalle-activo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleActivoPageRoutingModule
  ],
  declarations: [DetalleActivoPage]
})
export class DetalleActivoPageModule {}
