import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  constructor(private _httpClient : HttpClient) { }

  getActivo(idActivo: string){

    //this._httpClient.get
  }
}
