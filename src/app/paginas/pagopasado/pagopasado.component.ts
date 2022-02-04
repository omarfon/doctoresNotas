import { Component, OnInit } from '@angular/core';
import { PagodiaespecificotarjetaService } from 'src/app/services/pagodiaespecificotarjeta.service';
import * as moment from 'moment';
import 'moment/locale/es';


@Component({
  selector: 'app-pagopasado',
  templateUrl: './pagopasado.component.html',
  styleUrls: ['./pagopasado.component.scss']
})
export class PagopasadoComponent implements OnInit {
  public citasreporte;
  public rapid;
  date: String;

  constructor(public pagoPastSrv: PagodiaespecificotarjetaService) { }

  ngOnInit() {
      this.getpagoinicio();
  }
  buscarfechafiltrada(event){
    const diareportada=this.date;
    this.rapid = diareportada;
    this.pagoPastSrv.getpagodiaespecifico(this.date).subscribe(data =>{
      console.log(data);
      this.citasreporte = data;
    })
  }
  getpagoinicio(){

    this.pagoPastSrv.getpagodiainicio().subscribe(data =>{
      console.log(data);
      this.citasreporte = data;
    })
  }
  

}
