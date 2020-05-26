import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaActivos } from '../interfaces/interfaces';

const HOST = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  constructor( private _hhtpClient : HttpClient) { }
  //get Assets
  getActivos(token: String){

    return this._hhtpClient.get<RespuestaActivos>(`${HOST}/cafeMVC/servicio/validatoken.php?tok=${token}`)
    return this._hhtpClient.get<RespuestaActivos>(`${HOST}/cafeMVC/servicio/validatoken.php?tok=2525`)
    
    //return this._hhtpClient.get(`${HOST}/api/roles`)
    //return this._hhtpClient.get<RespuestaActivos>(`${HOST}/api/activo/5ec05888ed539f164021362b/5ec05460ed539f1640213626`)
    
      
  }
}
