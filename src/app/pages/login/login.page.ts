import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { ActivosService } from 'src/app/services/activos.service';
import { UtilsService } from 'src/app/services/utils.service';
import { ActPro, ActTec } from 'src/app/interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/services/user.service';


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


  constructor(
    private _activosService: ActivosService,
    private _navcrtl: NavController,
    private _utilsService: UtilsService,
    private _storage: Storage,
    private _userService: UserService) { }

  ngOnInit() {
    //this.slide.lockSwipes(true);
  }

  login(frmLogin: NgForm) {

    if (frmLogin.invalid) { 
      this._utilsService.informativeAlert("Token inválido");
      return; }

    console.log("estado forma: ", frmLogin.valid);
    console.log("token: ", this.loginUser.token);

    this._activosService.getActivos(this.loginUser.token).subscribe(res => {
      console.log("res: ", res);
      console.log('rol: ', res.rol);

      if (res.rol == 0) {
        //token invalido
        this._utilsService.informativeAlert("Token inválido")
      }
      else {
        //token valido
        this.activosPropietario.push(...res.actPro);
        this.activosTecnico.push(...res.actTec);
        this.saveAssets(this.activosPropietario);
        this._navcrtl.navigateRoot('main/tabs/tab1', { animated: true });
      }
    })
  }

  async saveAssets(activosPropietario: ActPro[]) {

    this.activosPropietario = activosPropietario;
    //this.activosTecnico = activosTecnico;

    await this._storage.set('activosPropietario', this.activosPropietario);
    console.log("save activos prop: ", this.activosPropietario)


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
