import { Component } from '@angular/core';
import { PagotarjetaService } from './services/pagotarjeta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doctoresNotas';
  public report: Array<any> = []
  constructor(
    private pagotarjetaService: PagotarjetaService
  ){
    this.pagotarjetaService.getdatospersonapago().subscribe((resp:any) =>{
      console.log(resp)
      this.report = resp
    })
  }
}
