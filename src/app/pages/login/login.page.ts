import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { ActivosService } from 'src/app/services/activos.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ActPro, ActTec, DatCon } from 'src/app/interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/services/user.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('mainSlide') slide: IonSlides;

  loginUser = {
    token: null
  }

  activosPropietario: ActPro[] = [];
  activosTecnico: ActTec[] = [];
  datosUsuario: DatCon


  constructor(
    private _activosService: ActivosService,
    private _navcrtl: NavController,
    private _utilsService: UtilsService,
    private _storage: Storage,
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
    //this.slide.lockSwipes(true);
  }

  login(frmLogin: NgForm) {

    if (frmLogin.invalid) {
      this._utilsService.informativeAlert("Token inválido");
      return;
    }

    
    this._activosService.getAsetsByUser(this.loginUser.token).subscribe(res => {
      console.log("res: ", res);
      console.log('rol: ', res.rol);
      console.log("datacon", res.datCon);

      if (res.rol == 0) {
        //token invalido
        this._utilsService.informativeAlert("Token inválido")
      }
      else {
        //token valido
        this.datosUsuario = res.datCon;
        this.activosPropietario.push(...res.actPro);
        this.activosTecnico.push(...res.actTec);
        
        this.saveUserData(this.datosUsuario);
        this.saveAssets(this.activosPropietario);
        this._navcrtl.navigateRoot(['main/tabs/tab1', this.datosUsuario], { animated: true });
        //this._navcrtl.navigateForward(['main/tabs/tab1', this.datosUsuario], { animated: true });

        
        //this._router.navigate(['main/tabs/tab1', nombreContacto])

      }
    })
  }

  async saveUserData(datosUsuario: DatCon) {
    await this._storage.set('datosUsuario', datosUsuario);
  }

  async saveAssets(activosPropietario: ActPro[]) {
    await this._storage.set('activosPropietario', activosPropietario);
  }



  //App Login Beta
  /*async loginBeta(frmLogin: NgForm) {

    if (frmLogin.invalid) { return; }

    console.log("estado forma: ", frmLogin.valid);
    console.log("token: ", this.loginUser.token);

    const tokenValido = await this._userService.login(this.loginUser.token);

    if (tokenValido) {
      //token valido
      this._utilsService.informativeAlert("Token inválido")
    }
    else {
      //token valido
      this.activosPropietario.push(...res.actPro);
      this.activosTecnico.push(...res.actTec);
      this.saveAssets(this.activosPropietario);
      this._navcrtl.navigateRoot('main/tabs/tab1', { animated: true });

    }

  })*/













}
