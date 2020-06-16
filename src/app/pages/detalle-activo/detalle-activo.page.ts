import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICarTcar, ITipcar, IDatact, IActivo, } from 'src/app/interfaces/interfaces';
import { ActivoService } from 'src/app/services/activo.service';
import { UserService } from 'src/app/services/user.service';

declare var mapboxgl: any;


@Component({
  selector: 'app-detalle-activo',
  templateUrl: './detalle-activo.page.html',
  styleUrls: ['./detalle-activo.page.scss'],
})
export class DetalleActivoPage implements OnInit {

  partesActivo: ITipcar[] =[];
  idActivo: string;


  //Caracteristica: Caraceristica del Tipo Caracterisitica
  carTcar: ICarTcar = {
    idcar: null,
    nombre: '',
    valor: ''
  }

  //Tipo Caracteristica: Componente o Parte del Activo
  tipCar: ITipcar = {
    idtipoc: null,
    indice: '',
    codtipc: '',
    nomtipc: '',
    idimgtc: null,
    carTcar: this.carTcar[0],
    aleTcar: null
  }

  //Datos del Activo
  datAct: IDatact = {
    idactivo: '',
    codact: '',
    nomact: '',
    idimgp: '../../assets/icon/image1.png',
    idimgd: '../../../assets/icon/image2.png',
    fecgar: '',
    latact: '',
    lonact: ''
  }

  activo: IActivo = {
    val: null,
    datact: this.datAct,
    tipcar: this.tipCar[0]
  }

  latitud: string;



  //Alerta sobre un Componente del activo
  /*alerta: alerta = {
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
  }*/


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _activoService: ActivoService,
    private _userService: UserService ) { }



  ngOnInit() {

    let idActivo = this._activatedRoute.snapshot.paramMap.get('idActivo');

    console.log("INIT DETAIL idActivo: ", idActivo);

    this._activoService.getActivo(idActivo).subscribe(res => {
      this.activo = res;
      console.log("RESP GETCOMPONENTIDACTIVO: ", this.activo)

      //Set images
      this.activo.datact.idimgp = '../assets/img/desplumadora.jpg'
      this.activo.datact.idimgd = '../assets/img/desplumadora2.jpeg'
      


      //Set Map
      mapboxgl.accessToken = 'pk.eyJ1Ijoiam5pbm9pdGZhY3RvcmlhIiwiYSI6ImNrYXd5dTM0eDAxYWcyc2x3cGJiaXFkZngifQ.XnNxv87OQK8EJPcJ-DpTaA';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.activo.datact.lonact, this.activo.datact.latact],
        zoom: 15

      });

      const marker = new mapboxgl.Marker()
        .setLngLat([this.activo.datact.lonact, this.activo.datact.latact])
        .addTo(map);

      //Set Parts

      this.idActivo = this.activo.datact.idactivo;
      console.log("DETALLE_ACTIVO SHARED Activo= ", idActivo);
      
      this.partesActivo.push(...res.tipcar) ;
      console.log("DETALLE_ACTIVO SHARED partesActivo= ", this.partesActivo);
      



    })




    //this.getComponents(idActivo);

    /*this._activatedRoute.queryParams.subscribe(params =>{
      let idActivo = params.get['idActivo']
      console.log("INIT DETAIL idActivo: ", idActivo)
    })*/



  }

  getComponents(idActivo: string) {
    console.log("GETCOMMPONENTS idActivo");
    this._activoService.getActivo(idActivo).subscribe(res => {
      console.log("RESP GETCOMPONENT: ", res)
      this.activo = res;
    })

  }


  getPartDetail() {
    console.log("part detail");
    this._router.navigate(['partes-activo']);

  }

  logout(){
    this._userService.logout();

  }

}
