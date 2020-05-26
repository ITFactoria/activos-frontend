import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private _alertController : AlertController) { }

  async informativeAlert(message: string) {
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      //subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
