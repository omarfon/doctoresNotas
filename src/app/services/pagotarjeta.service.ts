import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PagotarjetaService {
  private SERVER = API_ENDPOINT;
  

  _url= this.SERVER + 'ebooking/appointments/getPayedAppointments'
  
  constructor(private http: HttpClient){
    console.log("reporte pago con tarjeta")
  }


  getdatospersonapago(){
    return this.http.get(this._url).pipe(
      map(resp => {
        return resp
      })
    );
  }
  
}
 