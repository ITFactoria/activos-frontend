import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IActivo } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';



const HOST = environment.url;


@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  
  constructor(private _httpClient : HttpClient) { }

  getActivo(idActivo: string){

    return this._httpClient.get<IActivo>(`${HOST}/cafeMVC/servicio/buscaactivo.php?idqr=${idActivo}`);
  }
}
