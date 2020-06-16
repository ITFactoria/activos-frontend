import { Component, OnInit, Input } from '@angular/core';
import { ITipcar, IActivo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-partes-activo',
  templateUrl: './partes-activo.component.html',
  styleUrls: ['./partes-activo.component.scss'],
})
export class PartesActivoComponent implements OnInit {

  
  constructor() { }

  @Input() idActivo: string;
  @Input() partesActivo: ITipcar;

  ngOnInit() {
    
    console.log("PARTESACTIVOCOMPONENT idactivo: ", this.idActivo);
    console.log("PARTESACTIVOCOMPONENT partes: ", this.partesActivo);
    
    //console.log("PARTESACTIVOCOMPONENT: ", this.activo.tipcar);
    
  }

}
