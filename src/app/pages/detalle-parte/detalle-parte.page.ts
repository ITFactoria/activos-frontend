import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detalle-parte',
  templateUrl: './detalle-parte.page.html',
  styleUrls: ['./detalle-parte.page.scss'],
})
export class DetallePartePage implements OnInit {

  constructor( private _userService: UserService) { }

  ngOnInit() {
  }

  logout(){
    this._userService.logout()
  }

}
