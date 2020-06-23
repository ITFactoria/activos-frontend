import { Component, OnInit, Input } from '@angular/core';
import { ActTec, DatCon } from "../../interfaces/interfaces";
import { ActPro } from "../../interfaces/interfaces";
import { Router } from '@angular/router';


@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.scss'],
})
export class ActivoComponent implements OnInit {

  //@Input() activoTecnico: ActTec;
  @Input() activoPropietario: ActPro;
  
  
  constructor(private _router: Router) { }


  ngOnInit() {
    //console.log("ACTIVO activoTecnico: ", this.activoTecnico);
    console.log("ACTIVO activoPropietario: ", this.activoPropietario);
  }

  getDetalleActivo(idActivo : string){
    console.log("ACTIVO Activo: ", this.activoPropietario);
    console.log("ACTIVO Detail Activo: ", idActivo);
    
    this._router.navigate(['detalle-activo', idActivo]);
    
    

  }

}
