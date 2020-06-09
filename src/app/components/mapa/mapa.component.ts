import { Component, OnInit, Input } from '@angular/core';
import { detalleActivo } from 'src/app/interfaces/interfaces';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() detalleActivo: detalleActivo;


  constructor() { }

  ngOnInit() {

    let longitud = Number(this.detalleActivo.longitud);
    let latitud = Number(this.detalleActivo.latitud);

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam5pbm9pdGZhY3RvcmlhIiwiYSI6ImNrYXd5dTM0eDAxYWcyc2x3cGJiaXFkZngifQ.XnNxv87OQK8EJPcJ-DpTaA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitud, latitud],
      zoom: 15


    });

    const marker = new mapboxgl.Marker()
      .setLngLat([longitud, latitud])
      .addTo(map);



    /*mapboxgl.accessToken = 'pk.eyJ1Ijoiam5pbm9pdGZhY3RvcmlhIiwiYSI6ImNrYXd5dTM0eDAxYWcyc2x3cGJiaXFkZngifQ.XnNxv87OQK8EJPcJ-DpTaA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitud, latitud],
      zoom: 15
    });*/



  }

}
