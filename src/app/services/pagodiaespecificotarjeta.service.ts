import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagodiaespecificotarjetaService {
  private SERVER = API_ENDPOINT;
  _url1= this.SERVER + 'ebooking/appointments/getPayedHistoricAppointments'
  constructor(private http: HttpClient){
    console.log("reporte pago con tarjeta")
  }
  getpagodiaespecifico(date){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this._url1 +'/'+date, {headers}).pipe(
      map((resp:any)=>{
        return resp
      })
  )
    
  }
  getpagodiainicio(){
    return this.http.get(this._url1).pipe(
      map(resp => {
        return resp
      })
    );
  }
  
}
