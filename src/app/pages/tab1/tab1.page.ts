import { Component, OnInit } from '@angular/core';
import { ActivosService } from 'src/app/services/activos.service';
import { ActTec, ActPro, DatCon } from "../../interfaces/interfaces";
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/services/user.service';
import { NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //activosTecnico : ActTec[] =[];
  activosPropietario: ActPro[] = [];
  datosUsuario : DatCon;


  constructor(
    private _activoService: ActivosService,
    private _storage: Storage,
    private _userService: UserService,
    private _router: Router,
    private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
   
    this.loadUserData();
    this.loadAssets();
    console.log("TAB1: dataUser: ", this.datosUsuario);
    console.log("TAB1: activospropderr: ", this.activosPropietario);
  }

  async loadUserData() {
    this.datosUsuario = (await this._storage.get('datosUsuario')) || [];
  }

  async loadAssets() {
    this.activosPropietario = (await this._storage.get('activosPropietario')) || [];
  }

  logout() {
    this._userService.logout();
  }

}

