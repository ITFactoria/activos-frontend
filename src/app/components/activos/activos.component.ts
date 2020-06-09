import { Component, OnInit, Input } from '@angular/core';
import { ActTec, DatCon } from "../../interfaces/interfaces";
import { ActPro } from "../../interfaces/interfaces";


@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.scss'],
})
export class ActivosComponent implements OnInit {

  //@Input() activosTecnico : ActTec[] = [];
  @Input() activosPropietario : ActPro[] = [];

  

  constructor() { }

  ngOnInit() {
    //console.log("ACTIVOS ActivosTecnico: ", this.activosTecnico);
    console.log("ACTIVOS ActivosPropietario: ", this.activosPropietario);
    
    
  }

}
