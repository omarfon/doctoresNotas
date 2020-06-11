import { Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  private SERVER = API_ENDPOINT;
  private url = `${this.SERVER}ebooking/agenda-medico?professionalid=109`;

  constructor(public http: HttpClient) { }

  getDates(){
    const authorization = localStorage.getItem('authorization');
    let headers = new HttpHeaders({"Authorization": authorization});

    return this.http.get(this.url, {headers}).pipe(
              map((resp:any)=>{
                return resp
              })/* .catch(e =>{
                console.log('error desde el servidor:',e);
              }) */
          )
  }
}
