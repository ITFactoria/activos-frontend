import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaActivos } from '../interfaces/interfaces';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';

const HOST = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ActivosService {

  constructor( private _hhtpClient : HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.', error.error);
  };

  //get Assets
  getAsetsByUser(token: String){

    return this._hhtpClient.get<RespuestaActivos>(`${HOST}/cafeMVC/servicio/validatoken.php?tok=${token}`)
    .pipe(catchError(this.handleError));
    
    //return this._hhtpClient.get(`${HOST}/api/roles`)
    //return this._hhtpClient.get<RespuestaActivos>(`${HOST}/api/activo/5ec05888ed539f164021362b/5ec05460ed539f1640213626`)
    
      
  }
}
