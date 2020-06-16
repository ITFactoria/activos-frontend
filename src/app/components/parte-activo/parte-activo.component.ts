import { Component, OnInit, Input } from '@angular/core';
import { ITipcar } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parte-activo',
  templateUrl: './parte-activo.component.html',
  styleUrls: ['./parte-activo.component.scss'],
})
export class ParteActivoComponent implements OnInit {

  @Input() idActivo: string
  @Input() parteActivo : ITipcar

  constructor(private _router: Router) { }

  ngOnInit() {}

  getPartDetail(){
    console.log("PARTEACTIVO idactivo", this.idActivo);
    console.log("PARTEACTIVO parteactivo", this.parteActivo);
    console.log("PARTEACTIVO idparteactivo", this.parteActivo.idtipoc);
    
    
    this._router.navigate(['detalle-parte',this.idActivo, this.parteActivo.idtipoc]);


  }

}
