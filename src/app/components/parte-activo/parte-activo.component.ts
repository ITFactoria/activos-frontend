import { Component, OnInit, Input } from '@angular/core';
import { ITipcar } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parte-activo',
  templateUrl: './parte-activo.component.html',
  styleUrls: ['./parte-activo.component.scss'],
})
export class ParteActivoComponent implements OnInit {

  @Input() parteActivo : ITipcar

  constructor(private _router: Router) { }

  ngOnInit() {}

  getPartDetail(){
    console.log("Get Component");
    this._router.navigate(['detalle-parte'])


  }

}
