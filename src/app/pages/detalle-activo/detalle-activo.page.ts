import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { detalleActivo, tipoCaracteristica, caracteristica, alerta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-detalle-activo',
  templateUrl: './detalle-activo.page.html',
  styleUrls: ['./detalle-activo.page.scss'],
})
export class DetalleActivoPage implements OnInit {

  //Alerta sobre un Componente del activo
  alerta: alerta = {
    idalerta: 0,
    aviso: '',
    finicio: '',
    ffin: '',
    nrodias: 0
  }

  //Caracteristica de un Componente del activo
  caracteristica: caracteristica = {
    idcar: 1,
    nombre: 'caballaje',
    valor: '500HP',
    alertas: this.alerta[0]
  }

  //Componente del activo
  tipoCaracteristica: tipoCaracteristica = {
    idtipoc: 1,
    indice: 1,
    codtipc: 1,
    nomtipc: 'motor',
    idimgtc: '',
    caracteristicas: this.caracteristica[0]
  }

  detalleActivo: detalleActivo = {
    idact: 13,
    codact: 131313,
    idimgp: '../../../assets/icon/image1.png',
    idimgd: '../../../assets/icon/image2.png',
    fecgar: '03062023',
    nombreactivo: 'Retroexcavadora industrial',
    latitud: '31.230416',
    longitud: '121.473701',
    direccion: 'la estrella',
    tipoCaracteristicas: this.tipoCaracteristica[0]
  }



  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

    let idActivo = this._activatedRoute.snapshot.paramMap.get('idActivo');
    console.log("INIT DETAIL idActivo: ", idActivo);

    /*this._activatedRoute.queryParams.subscribe(params =>{
      let idActivo = params.get['idActivo']
      console.log("INIT DETAIL idActivo: ", idActivo)
    })*/


  }

  getComponents(item: string) {
    console.log("Part Detail");
    console.log("Commponenets: ", this.detalleActivo.tipoCaracteristicas);

    console.log("Commponenets: ", this.detalleActivo.tipoCaracteristicas[0].codtipc);
    console.log("Commponenets: ", this.detalleActivo.tipoCaracteristicas[0].nomtipc);

  }

  getPartDetail(){
    console.log("part detail");
    this._router.navigate(['partes-activo']);

  }

}
