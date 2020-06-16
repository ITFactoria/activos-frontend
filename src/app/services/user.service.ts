import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { ActivosService } from './activos.service';

const HOST = environment.url;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _httpClient: HttpClient,
    private _navController: NavController,
    private _activosService: ActivosService) { }

  getAssets(token: string) {
    this._httpClient.get(`${HOST}/cafeMVC/servicio/validatoken.php?`)

  }

  loginBeta(token: string) {

    return new Promise(resolve => {

      this._activosService.getAsetsByUser(token).subscribe(res => {
        console.log("res: ", res);
        console.log('rol: ', res.rol);

        if (res.rol == 0) {
          //token invalido
          resolve(false);
        }
        else {
          //token valido
          resolve(true);
        }
      })
    })
  }

  logout() {
    this._navController.navigateRoot('/login', { animated: true });

  }
}
