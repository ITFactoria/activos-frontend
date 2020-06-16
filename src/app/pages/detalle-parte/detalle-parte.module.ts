import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePartePageRoutingModule } from './detalle-parte-routing.module';

import { DetallePartePage } from './detalle-parte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePartePageRoutingModule
  ],
  declarations: [DetallePartePage]
})
export class DetallePartePageModule {}
