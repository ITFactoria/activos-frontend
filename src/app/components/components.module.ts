import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivosComponent } from "../components/activos/activos.component";
import { ActivoComponent } from "../components/activo/activo.component";
import { IonicModule } from '@ionic/angular';
import { UsuarioComponent } from './usuario/usuario.component';
import { MapaComponent } from './mapa/mapa.component';
import { ParteActivoComponent } from './parte-activo/parte-activo.component';
import { PartesActivoComponent } from './partes-activo/partes-activo.component';



@NgModule({
  declarations: [
    ActivoComponent,
    ActivosComponent,
    UsuarioComponent,
    MapaComponent,
    PartesActivoComponent,
    ParteActivoComponent],
  imports: [
    CommonModule,
    IonicModule],
  exports: [
    ActivosComponent,
    UsuarioComponent,
    MapaComponent,
    PartesActivoComponent,
    ParteActivoComponent]
})
export class ComponentsModule { }
