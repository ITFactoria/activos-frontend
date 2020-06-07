import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivosComponent } from "../components/activos/activos.component";
import { ActivoComponent } from "../components/activo/activo.component";
import { IonicModule } from '@ionic/angular';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [ActivoComponent, ActivosComponent, UsuarioComponent],
  imports: [CommonModule, IonicModule],
  exports: [ActivosComponent, UsuarioComponent]
})
export class ComponentsModule { }
