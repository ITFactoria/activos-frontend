import { Component, OnInit } from '@angular/core';
import { ActivosService } from 'src/app/services/activos.service';
import { ActTec } from "../../interfaces/interfaces";
import { ActPro } from "../../interfaces/interfaces";
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //activosTecnico : ActTec[] =[];
  activosPropietario: ActPro[] = [];


  constructor(
    private _activoService: ActivosService, 
    private _storage: Storage,
    private _userService: UserService) { }

  ngOnInit() {
    /*this._activoService.getActivos('').subscribe( res=>{
      console.log("res: ", res);
      console.log("resactivotecnico: ", res.actTec);
      this.activosTecnico.push(...res.actTec);
      console.log("activostecpush: ", this.activosTecnico);
      console.log("resactivopropietario: ", res.actPro);
      
      this.activosPropietario.push(...res.actPro);
      console.log("activosproppush: ", this.activosPropietario);
      
    })
    */
    console.log("TAB1-oninit");
    this.loadAssets();
    console.log("TAB1: activospropderr: ", this.activosPropietario);
  }

  async loadAssets() {
    this.activosPropietario = (await this._storage.get('activosPropietario')) || [];

  }

  logout(){
    this._userService.logout();
  }

}

