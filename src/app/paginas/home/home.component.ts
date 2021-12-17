import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';
import { DatesService } from 'src/app/services/dates.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fechaindicada: String;
  private data : any;
  name: any;
  public consultas;
  public allcitas;
  public totalConsultasprevias;
  public citas;
  public citasPendientes;
  public citastotales;
  public citasdiarias;
  public citasayer;
  public citassemanales;
  public citasHoy;
  public citassemanapasada;
  public citasindicada;
  public suma7;
  public suma6;
  public suma5;
  public suma4;
  public suma3;
  public suma2;
  public suma1;
  public diadehoy;
  public diadeayer;
  public primerdia;
  public septimodia;
  public fechadeseleccion;
  
  constructor(private router: Router,
              public consultaSrv: ConsultasService,
              
              public datesSrv: DatesService) { }
 
  ngOnInit() {
    this.getcitastotales();
    this.getcitasindicadas(event);
    
  }
  
  goToCitasPendientes(){
    this.router.navigate(['/citaspendientes']);
  }
  goToCitas(){
    this.router.navigate(['/citas']);
  }
  getDates(){
    this.datesSrv.getDates().subscribe(data => {
      this.citas = data

      if(this.citas){
        this.citasPendientes = this.citas.length;
      }
    }, err =>{
      console.log(err);
    });
  }


  getcitastotales(){
    
      this.consultaSrv.getallconsultas().subscribe((resp:any)=>{
      this.citastotales=resp.length;
      this.allcitas= resp;
      console.log(resp,this.citastotales);
       // 7 dias atras
       const dia7 = moment().add(-7,'days').format('yyyy-MM-D'); 
       this.septimodia=dia7; 
       console.log(dia7) 
       const suma7 = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == dia7);
       this.suma7 = suma7.length;
       console.log(suma7, dia7)
       // 6 dias atras
       const dia6 = moment().add(-6,'days').format('yyyy-MM-D'); 
       console.log(dia6) 
       const suma6 = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == dia6);
       this.suma6 = suma6.length;
       console.log(suma6, dia6)
       // 5 dias atras
       const dia5 = moment().add(-5,'days').format('yyyy-MM-D'); 
       console.log(dia5) 
       const suma5 = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == dia5);
       this.suma5 = suma5.length;
       console.log(suma5, dia5)
       // 4 dias atras
       const dia4 = moment().add(-4,'days').format('yyyy-MM-D'); 
       console.log(dia4) 
       const suma4 = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == dia4);
       this.suma4 = suma4.length;
       console.log(suma4, dia4)
       // 3 dias atras
       const dia3 = moment().add(-3,'days').format('yyyy-MM-D'); 
       console.log(dia3) 
       const suma3 = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == dia3);
       this.suma3 = suma3.length;
       console.log(suma3, dia3)
       // 2 dias atras
       const dia2 = moment().add(-2,'days').format('yyyy-MM-D'); 
       console.log(dia2) 
       const suma2 = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == dia2);
       this.suma2 = suma2.length;
       console.log(suma2, dia2)
       // 1 dias atras
       const dia1 = moment().add(-1,'days').format('yyyy-MM-D'); 
       this.primerdia=dia1;
       console.log(dia1) 
       const suma1 = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == dia1);
       this.suma1 = suma1.length;
       console.log(suma1, dia1)
       // suma de dias
       this.citassemanapasada=((this.suma1)+(this.suma2)+(this.suma3)+(this.suma4)+(this.suma5)+(this.suma6)+(this.suma7));
      // citas del dia hoy
      const hoy = moment().format('yyyy-MM-D');
      this.diadehoy=hoy;
      console.log(hoy) 
      const citasHoy = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == hoy);
      this.citasHoy = citasHoy.length;
      console.log(citasHoy, hoy)
      // citas del dia de ayer
      const ayer = moment().add(-1,'days').format('yyyy-MM-D'); 
      this.diadeayer=ayer; 
      console.log(ayer) 
      const citasayer = resp.filter(x => x.data.appointmentDateTime.slice(0,10) == ayer);
      this.citasayer = citasayer.length;
      console.log(citasayer, ayer)
     
     
     

    })
  }
  getcitasindicadas(event){
    
      const fechas_seleccionada= this.fechaindicada; 
      this.fechadeseleccion=fechas_seleccionada; 
      console.log(fechas_seleccionada) 
      const citasindicada = this.allcitas.filter(x => x.data.appointmentDateTime.slice(0,10) == fechas_seleccionada);
      this.citasindicada = citasindicada.length;
      console.log(citasindicada, fechas_seleccionada)


   
     
    
  }





 
}


