import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivosComponent } from "../components/activos/activos.component";
import { ActivoComponent } from "../components/activo/activo.component";
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ActivoComponent, ActivosComponent],
  imports: [CommonModule, IonicModule],
  exports: [ActivosComponent]
})
export class ComponentsModule { }
