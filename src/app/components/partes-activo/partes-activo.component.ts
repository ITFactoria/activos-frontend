import { Component, OnInit, Input } from '@angular/core';
import { ITipcar } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-partes-activo',
  templateUrl: './partes-activo.component.html',
  styleUrls: ['./partes-activo.component.scss'],
})
export class PartesActivoComponent implements OnInit {

  @Input() partesActivo: ITipcar;

  constructor() { }

  ngOnInit() {
    console.log("PARTESACTIVOCOMPONENT: ", this.partesActivo);
  }

}
