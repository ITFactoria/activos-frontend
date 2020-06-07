import { Component, OnInit, Input } from '@angular/core';
import { DatCon } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  @Input() datosUsuario : DatCon;
  

  constructor() { }

  ngOnInit() {}

}
