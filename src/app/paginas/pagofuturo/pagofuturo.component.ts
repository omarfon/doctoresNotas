import { Component, OnInit } from '@angular/core';
import { PagotarjetaService } from 'src/app/services/pagotarjeta.service';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-pagofuturo',
  templateUrl: './pagofuturo.component.html',
  styleUrls: ['./pagofuturo.component.scss']
})
export class PagofuturoComponent implements OnInit {
  public citas;
  public rhoyf;
  public rdiaf;
  public rmesf;
  public ryearf;
  public frmesf;
  public fryearf;
  constructor(public pagoFutuSrv: PagotarjetaService) { }

  ngOnInit() {
    this.getAllPagoFuturo();
  }

  getAllPagoFuturo(){
    const hoyf=moment().format('dddd, DDº');
    const mesf=moment().format('MMMM');
    const yearf= moment().format('YYYY');
    
    const fhoyf=moment().add(+15,'days').format('dddd, DDº');
    const fmesf=moment().add(+15,'days').format('MMMM');
    const fyearf= moment().add(+15,'days').format('YYYY');
    this.rhoyf=hoyf;
    this.rmesf=mesf;
    this.ryearf=yearf;
    this.rdiaf=fhoyf;
    this.frmesf=fmesf;
    this.fryearf=fyearf;
    
    this.pagoFutuSrv.getdatospersonapago().subscribe(data =>{
      console.log(data);
      this.citas = data;
    })
  }

}
