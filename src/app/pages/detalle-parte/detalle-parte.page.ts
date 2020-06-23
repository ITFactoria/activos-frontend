import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivoService } from 'src/app/services/activo.service';
import { IActivo, ICarTcar, ITipcar, IAlerta } from 'src/app/interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-parte',
  templateUrl: './detalle-parte.page.html',
  styleUrls: ['./detalle-parte.page.scss'],
})
export class DetallePartePage implements OnInit {

  activo: IActivo;
  partes: ITipcar[] =[];
  caracteristicas : ICarTcar[];
  caracteristica : ICarTcar;
  idActivo: string;
  idParte: string;
  alertas: IAlerta[];
  
  //parte: ITipcar;

  parte: ITipcar = {
    idtipoc: null,
    indice: '',
    codtipc: '',
    nomtipc: '',
    idimgtc: null,
    carTcar: this.caracteristicas,
    aleTcar: null
  }
  
  constructor( 
    private _userService: UserService, 
    private _activoService: ActivoService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.idActivo = this._activatedRoute.snapshot.paramMap.get('idActivo');
    this.idParte = this._activatedRoute.snapshot.paramMap.get('idParte');
    
    console.log("DETAIL PARTE idActivo: ", this.idActivo);
    console.log("DETAIL PARTE idParte: ", this.idParte);
    
    this.getPartesActivo(this.idActivo);
  }

  getPartesActivo(idActivo: string){

    this._activoService.getActivo(idActivo).subscribe(res=>{
      console.log("GETPARTESACTIVO res: ", res);
      this.activo = res;
      this.partes.push(...this.activo.tipcar);

      this.parte = this.partes.find(p => p.idtipoc === Number(this.idParte));
      this.caracteristicas = this.parte.carTcar;

      console.log("DETALLE PARTE Parte encontrada: ", this.parte);
      console.log("DETALLE PARTE Caracteristicas: ", this.parte.carTcar);
     

      //Images
      let imagen = "../../../assets/img/motor.jpeg"
      //this.activo.datact.idimgp = '../assets/img/desplumadora.jpg'
      //this.parte.idimgtc = "../../../assets/img/motor.jpeg"
      
      //Alertas
      this.alertas = this.parte.aleTcar;
    })
  }

  
  logout(){
    this._userService.logout()
  }

}
