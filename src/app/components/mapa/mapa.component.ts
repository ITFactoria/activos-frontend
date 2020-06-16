import { Component, OnInit, Input } from '@angular/core';
import { IActivo } from 'src/app/interfaces/interfaces';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() activo: IActivo;
  //@Input() latitud: string;
  

  constructor() { }

  ngOnInit() {

    console.log("MAPAACTIVoLONG: ", this.activo);
    //console.log("LATITUD: ", this.latitud);
    

    // let longitud = Number(this.activo.datact.lonact);
    // let latitud = Number(this.activo.datact.latact);
    

    // console.log("MAPAACTIVO: ", this.activo);

    //console.log("longitud: ", longitud);
    //this.setMapa();

    /*mapboxgl.accessToken = 'pk.eyJ1Ijoiam5pbm9pdGZhY3RvcmlhIiwiYSI6ImNrYXd5dTM0eDAxYWcyc2x3cGJiaXFkZngifQ.XnNxv87OQK8EJPcJ-DpTaA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitud, latitud],
      zoom: 15

    });

    const marker = new mapboxgl.Marker()
      .setLngLat([longitud, latitud])
      .addTo(map);*/



    /*mapboxgl.accessToken = 'pk.eyJ1Ijoiam5pbm9pdGZhY3RvcmlhIiwiYSI6ImNrYXd5dTM0eDAxYWcyc2x3cGJiaXFkZngifQ.XnNxv87OQK8EJPcJ-DpTaA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitud, latitud],
      zoom: 15
    });*/



  }

  

}
