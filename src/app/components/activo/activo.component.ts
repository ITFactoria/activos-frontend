import { Component, OnInit, Input } from '@angular/core';
import { ActTec } from "../../interfaces/interfaces";
import { ActPro } from "../../interfaces/interfaces";


@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.scss'],
})
export class ActivoComponent implements OnInit {

  //@Input() activoTecnico: ActTec;
  @Input() activoPropietario: ActPro;
  
  constructor() { }


  ngOnInit() {
    //console.log("ACTIVO activoTecnico: ", this.activoTecnico);
    console.log("ACTIVO activoPropietario: ", this.activoPropietario);
  }

}
