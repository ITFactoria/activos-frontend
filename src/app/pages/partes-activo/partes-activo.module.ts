import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartesActivoPageRoutingModule } from './partes-activo-routing.module';

import { PartesActivoPage } from './partes-activo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartesActivoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PartesActivoPage]
})
export class PartesActivoPageModule {}
