import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';
import { DatesService } from 'src/app/services/dates.service';
import * as moment from 'moment';
import 'moment/locale/es';




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
  public newcitasayer;
  public citassemanales;
  public newcitasHoy;
  public citassemanapasada;
  public newcitasindicada;
  public newsuma7;
  public newsuma6;
  public newsuma5;
  public newsuma4;
  public newsuma3;
  public newsuma2;
  public newsuma1;
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
  goToCitasPagadasFuture(){
    this.router.navigate(['/pagofuturo']);
  }
  goToCitasPagadasPast(){
    this.router.navigate(['/pagopasado']);
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
      // citas del dia hoy
      const hoy = moment().format('dddd, MMMM Dº YYYY');
     
      const currentmonth = moment().format('MMMM');
      const currentday = moment().format('dddd');
      const currentspecificday = moment().format('D');
      this.diadehoy=hoy;
      console.log(hoy) 
      console.log(currentmonth)
      console.log(currentday)
      console.log(currentspecificday)
    
      if(currentmonth == 'enero' || currentmonth == 'marzo' || currentmonth == 'abril' || currentmonth == 'junio' || currentmonth == 'julio' ){
        if(currentday == 'lunes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
          

        }else if(currentday == 'martes' || currentday == 'jueves' || currentday == 'sábado'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == hoy);
          this.newcitasHoy = citasHoy.length;
          console.log(citasHoy)
          console.log(this.newcitasHoy, hoy )                                                                    
          }
          

        }else if(currentday == 'miércoles'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                    
          }
        

        }else if(currentday == 'domingo' || currentday == 'viernes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
        

        }
      
         
      } else if(currentmonth == 'agosto' ) {
        if(currentday == 'lunes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
         

        }else if(currentday == 'martes' || currentday == 'jueves' || currentday == 'sábado'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
         

        }else if(currentday == 'miércoles'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
         

        }else if(currentday == 'domingo' || currentday == 'viernes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
       

        }
      

      } else if (currentmonth == 'febrero' || currentmonth == 'octubre' ){
        if(currentday == 'lunes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
       

        }else if(currentday == 'martes' || currentday == 'jueves' || currentday == 'sábado'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
          

        }else if(currentday == 'miércoles'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
       

        }else if(currentday == 'domingo' || currentday == 'viernes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
         

        }
      

      } else if (currentmonth == 'noviembre' || currentmonth == 'diciembre'){
        if(currentday == 'lunes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
        

        }else if(currentday == 'martes' || currentday == 'jueves' || currentday == 'sábado'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
   

        }else if(currentday == 'miércoles'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
       

        }else if(currentday == 'domingo' || currentday == 'viernes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
       

        }

      }else if (currentmonth == 'septiembre'){
        if(currentday == 'lunes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
         

        }else if(currentday == 'martes' || currentday == 'jueves' || currentday == 'sábado'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
         

        }else if(currentday == 'miércoles'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,30) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
          

        }else if(currentday == 'domingo' || currentday == 'viernes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
        

        }


      }else if (currentmonth == 'mayo'){
        if(currentday == 'lunes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
      

        }else if(currentday == 'martes' || currentday == 'jueves' || currentday == 'sábado'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
       

        }else if(currentday == 'miércoles'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                  
          }
         

        }else if(currentday == 'domingo' || currentday == 'viernes'){
          if(currentspecificday == '1' || currentspecificday == '2' || currentspecificday == '3' || currentspecificday == '4' || currentspecificday == '5' || currentspecificday == '6' || currentspecificday == '7' || currentspecificday == '8' || currentspecificday == '9'){
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )
          }else{
            const citasHoy = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == hoy);
            this.newcitasHoy = citasHoy.length;
            console.log(citasHoy)
            console.log(this.newcitasHoy, hoy )                                                                   
          }
         
          

        }

                                      }
    

      // citas del dia de ayer
      const ayer = moment().add(-1,'days').format('dddd, MMMM Dº YYYY'); 
      const pastmonth = moment().add(-1, 'days').format('MMMM');
      const pastday = moment().add(-1,'days').format('dddd');
      const pastspecificday = moment().add(-1,'days').format('D');
      this.diadeayer=ayer; 
      console.log(ayer) 
      console.log(pastmonth)
      console.log(pastday)
      console.log(pastspecificday)
     
     
     // hasta aca
      if(pastmonth == 'enero' || pastmonth == 'marzo' || pastmonth == 'abril' || pastmonth == 'junio' || pastmonth == 'julio' ){
        if(pastday == 'lunes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                         
          }
         

        }else if(pastday == 'martes' || pastday == 'jueves' || pastday == 'sábado'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                   
          }
       

        }else if(pastday == 'miércoles'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                    
          }
        

        }else if(pastday == 'domingo' || pastday == 'viernes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                  
          }
       

        }
      
         
      } else if(pastmonth == 'agosto' ) {
        if(pastday == 'lunes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                    
          }
        

        }else if(pastday == 'martes' || pastday == 'jueves' || pastday == 'sábado'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == ayer);
          this.newcitasayer = citasayer.length;
          console.log(citasayer)
          console.log(this.newcitasayer, ayer )                                                                    
          }
          

        }else if(pastday == 'miércoles'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                   
          }
        

        }else if(pastday == 'domingo' || pastday == 'viernes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                    
          }
     

        }
      

      } else if (pastmonth == 'febrero' || pastmonth == 'octubre' ){
        if(pastday == 'lunes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                   
          }
         

        }else if(pastday == 'martes' || pastday == 'jueves' || pastday == 'sábado'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                    
          }
       

        }else if(pastday == 'miércoles'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                  
          }
         

        }else if(pastday == 'domingo' || pastday == 'viernes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
  
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
                                                                    
          }
          
        }
      

      } else if (pastmonth == 'noviembre' || pastmonth == 'diciembre'){
        if(pastday == 'lunes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                    
          }
        

        }else if(pastday == 'martes' || pastday == 'jueves' || pastday == 'sábado'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                    
          }
         

        }else if(pastday == 'miércoles'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                   
          }
       

        }else if(pastday == 'domingo' || pastday == 'viernes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                  
          }
         
        }

      }else if (currentmonth == 'septiembre'){
        if(pastday == 'lunes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                   
          }
       

        }else if(pastday == 'martes' || pastday == 'jueves' || pastday == 'sábado'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                    
          }
         

        }else if(pastday == 'miércoles'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,30) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                   
          }
          

        }else if(pastday == 'domingo' || pastday == 'viernes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
  
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
                                                                    
          }
     
        }


      }else if (pastmonth == 'mayo'){
        if(pastday == 'lunes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == ayer);
          this.newcitasayer = citasayer.length;
          console.log(citasayer)
          console.log(this.newcitasayer, ayer )                                                                    
          }
          

        }else if(pastday == 'martes' || pastday == 'jueves' || pastday == 'sábado'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                 
          }
        

        }else if(pastday == 'miércoles'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )                                                                   
          }
         

        }else if(pastday == 'domingo' || pastday == 'viernes'){
          if(pastspecificday == '1' || pastspecificday == '2' || pastspecificday == '3' || pastspecificday == '4' || pastspecificday == '5' || pastspecificday == '6' || pastspecificday == '7' || pastspecificday == '8' || pastspecificday == '9'){
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
  
          }else{
            const citasayer = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == ayer);
            this.newcitasayer = citasayer.length;
            console.log(citasayer)
            console.log(this.newcitasayer, ayer )
                                                                    
          }
      
        }

                                      }

                                                           
         // 7 dias atras
         const dia7 = moment().add(-7,'days').format('dddd, MMMM Dº YYYY'); 
         const sevenmonth =moment().add(-7, 'days').format('MMMM');
         const sevenday = moment().add(-7,'days').format('dddd');
         const sevenspecificday = moment().add(-7,'days').format('D');
         this.septimodia=dia7; 
         console.log(dia7) 
         console.log(sevenmonth);
         console.log(sevenday);
         console.log(sevenspecificday);

        

         if(sevenmonth == 'enero' || sevenmonth == 'marzo' || sevenmonth == 'abril' || sevenmonth == 'junio' || sevenmonth == 'julio' ){
          if(sevenday == 'lunes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }
           
  
          }else if(sevenday == 'martes' || sevenday == 'jueves' || sevenday == 'sábado'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }
            
            
  
          }else if(sevenday == 'miércoles'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
              
            }
            
  
          }else if(sevenday == 'domingo' || sevenday == 'viernes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia7);
              this.newsuma7 = suma7.length;
           
              console.log(suma7)
              console.log(this.newsuma7, dia7 )

            }else {
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia7);
              this.newsuma7 = suma7.length;
              
              console.log(suma7)
            console.log(this.newsuma7, dia7 )

            }
           
          }
        
           
        } else if(sevenmonth == 'agosto' ) {
          if(sevenday == 'lunes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            
            }
            
  
          }else if(sevenday == 'martes' || sevenday == 'jueves' || sevenday == 'sábado'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            
            }
          }else if(sevenday == 'miércoles'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'domingo' || sevenday == 'viernes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }
            
  
          }
        
  
        } else if (sevenmonth == 'febrero' || sevenmonth == 'octubre' ){
          if(sevenday == 'lunes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'martes' || sevenday == 'jueves' || sevenday == 'sábado'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'miércoles'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'domingo' || sevenday == 'viernes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
            const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }
        
  
        } else if (sevenmonth == 'noviembre' || sevenmonth == 'diciembre'){
          if(sevenday == 'lunes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
    
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
    
            }
           
          }else if(sevenday == 'martes' || sevenday == 'jueves' || sevenday == 'sábado'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia7);
            this.newsuma7 = suma7.length;
            console.log(suma7)
            console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'miércoles'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'domingo' || sevenday == 'viernes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
          }
  
        }else if (sevenmonth == 'septiembre'){
          if(sevenday == 'lunes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'martes' || sevenday == 'jueves' || sevenday == 'sábado'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'miércoles'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,30) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'domingo' || sevenday == 'viernes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }
  
  
        }else if (sevenmonth == 'mayo'){
          if(sevenday == 'lunes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }else if(sevenday == 'martes' || sevenday == 'jueves' || sevenday == 'sábado'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
           
  
          }else if(sevenday == 'miércoles'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
           
  
          }else if(sevenday == 'domingo' || sevenday == 'viernes'){
            if(sevenspecificday == '1' || sevenspecificday == '2' || sevenspecificday == '3' || sevenspecificday == '4' || sevenspecificday == '5' || sevenspecificday == '6' || sevenspecificday == '7' || sevenspecificday == '8' || sevenspecificday == '9'){
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }else{
              const suma7 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia7);
              this.newsuma7 = suma7.length;
              console.log(suma7)
              console.log(this.newsuma7, dia7 )
            }
            
  
          }
  
                                        }







         // 6 dias atras
         const dia6 = moment().add(-6,'days').format('dddd, MMMM Dº YYYY'); 
         const sixmonth =moment().add(-6, 'days').format('MMMM');
         const sixday = moment().add(-6,'days').format('dddd');
         const sixspecificday = moment().add(-6,'days').format('D');
         console.log(dia6) 
         console.log(sixmonth);
         console.log(sixday);
         console.log(sixspecificday); 


         


         if(sixmonth == 'enero' || sixmonth == 'marzo' || sixmonth == 'abril' || sixmonth == 'junio' || sixmonth == 'julio' ){
          if(sixday == 'lunes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )      
            }
          
  
          }else if(sixday == 'martes' || sixday == 'jueves' || sixday == 'sábado'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )        
            }
          
  
          }else if(sixday == 'miércoles'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
            
  
          }else if(sixday == 'domingo' || sixday == 'viernes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia6);
            this.newsuma6 = suma6.length;
            console.log(suma6)
            console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
            
  
          }
        
           
        } else if(sixmonth == 'agosto' ) {
          if(sixday == 'lunes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )      
            }
            
  
          }else if(sixday == 'martes' || sixday == 'jueves' || sixday == 'sábado'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )      
            }
            
  
          }else if(sixday == 'miércoles'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
            
  
          }else if(sixday == 'domingo' || sixday == 'viernes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )      
            }
            
  
          }
        
  
        } else if (sixmonth == 'febrero' || sixmonth == 'octubre' ){
          
          if(sixday == 'lunes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
           
  
          }else if(sixday == 'martes' || sixday == 'jueves' || sixday == 'sábado'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
           
  
          }else if(sixday == 'miércoles'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia6);
            this.newsuma6 = suma6.length;
            console.log(suma6)
            console.log(this.newsuma6, dia6 )          
            }
            
  
          }else if(sixday == 'domingo' || sixday == 'viernes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
            
  
          }
        
  
        } else if (sixmonth == 'noviembre' || sixmonth == 'diciembre'){
          if(sixday == 'lunes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia6);
            this.newsuma6 = suma6.length;
            console.log(suma6)
            console.log(this.newsuma6, dia6 )          
            }
            
  
          }else if(sixday == 'martes' || sixday == 'jueves' || sixday == 'sábado'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )          
            }
           
  
          }else if(sixday == 'miércoles'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )       
            }
           
  
          }else if(sixday == 'domingo' || sixday == 'viernes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
            
          }
  
        }else if (sixmonth == 'septiembre'){
          if(sixday == 'lunes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )        
            }
            
  
          }else if(sixday == 'martes' || sixday == 'jueves' || sixday == 'sábado'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )        
            }
           
  
          }else if(sixday == 'miércoles'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,30) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
            
  
          }else if(sixday == 'domingo' || sixday == 'viernes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )         
            }
          
  
          }
  
  
        }else if (sixmonth == 'mayo'){
          if(sixday == 'lunes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )        
            }
            
  
          }else if(sixday == 'martes' || sixday == 'jueves' || sixday == 'sábado'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )      
            }
           
  
          }else if(sixday == 'miércoles'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )       
            }
         
  
          }else if(sixday == 'domingo' || sixday == 'viernes'){
            if(sixspecificday == '1' || sixspecificday == '2' || sixspecificday == '3' || sixspecificday == '4' || sixspecificday == '5' || sixspecificday == '6' || sixspecificday == '7' || sixspecificday == '8' || sixspecificday == '9'){
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
    
            }else{
              const suma6 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia6);
              this.newsuma6 = suma6.length;
              console.log(suma6)
              console.log(this.newsuma6, dia6 )
             
            }
            
          }
  
                                        }
         // 5 dias atras
         const dia5 = moment().add(-5,'days').format('dddd, MMMM Dº YYYY'); 
         const fivemonth =moment().add(-5, 'days').format('MMMM');
         const fiveday = moment().add(-5,'days').format('dddd');
         const fivespecificday = moment().add(-5,'days').format('D');
         console.log(dia5) 
         console.log(fivemonth);
         console.log(fiveday);
         console.log(fivespecificday);
         if(fivemonth == 'enero' || fivemonth == 'marzo' || fivemonth == 'abril' || fivemonth == 'junio' || fivemonth == 'julio' ){
          if(fiveday == 'lunes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma6, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma6, dia5 )        
            }
         
  
          }else if(fiveday == 'martes' || fiveday == 'jueves' || fiveday == 'sábado'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma6, dia5 )
    
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma6, dia5 )
                         
            }
            
          }else if(fiveday == 'miércoles'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma6, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma6, dia5 )                    
            }
           
  
          }else if(fiveday == 'domingo' || fiveday == 'viernes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
           
  
          }
        
           
        } else if(fivemonth == 'agosto' ) {
          if(fiveday == 'lunes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                    
            }
         
  
          }else if(fiveday == 'martes' || fiveday == 'jueves' || fiveday == 'sábado'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
        
  
          }else if(fiveday == 'miércoles'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
            
  
          }else if(fiveday == 'domingo' || fiveday == 'viernes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
            
  
          }
        
  
        } else if (fivemonth == 'febrero' || fivemonth == 'octubre' ){
          if(fiveday == 'lunes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                    
            }
            
  
          }else if(fiveday == 'martes' || fiveday == 'jueves' || fiveday == 'sábado'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                    
            }
            
  
          }else if(fiveday == 'miércoles'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
          
  
          }else if(fiveday == 'domingo' || fiveday == 'viernes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
           
  
          }
        
  
        } else if (fivemonth == 'noviembre' || fivemonth == 'diciembre'){
          if(fiveday == 'lunes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
           
  
          }else if(fiveday == 'martes' || fiveday == 'jueves' || fiveday == 'sábado'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia5);
            this.newsuma5 = suma5.length;
            console.log(suma5)
            console.log(this.newsuma5, dia5 )                      
            }
            
  
          }else if(fiveday == 'miércoles'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia5);
            this.newsuma5 = suma5.length;
            console.log(suma5)
            console.log(this.newsuma5, dia5 )                      
            }
            
  
          }else if(fiveday == 'domingo' || fiveday == 'viernes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia5);
            this.newsuma5 = suma5.length;
            console.log(suma5)
            console.log(this.newsuma5, dia5 )                      
            }
            
          }
  
        }else if (fivemonth == 'septiembre'){
          if(fiveday == 'lunes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                    
            }
            
  
          }else if(fiveday == 'martes' || fiveday == 'jueves' || fiveday == 'sábado'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
            
  
          }else if(fiveday == 'miércoles'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,30) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                    
            }
           
  
          }else if(fiveday == 'domingo' || fiveday == 'viernes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
          
  
          }
  
  
        }else if (fivemonth == 'mayo'){
          if(fiveday == 'lunes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                    
            }
            
  
          }else if(fiveday == 'martes' || fiveday == 'jueves' || fiveday == 'sábado'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                   
            }
         
  
          }else if(fiveday == 'miércoles'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
            
  
          }else if(fiveday == 'domingo' || fiveday == 'viernes'){
            if(fivespecificday == '1' || fivespecificday == '2' || fivespecificday == '3' || fivespecificday == '4' || fivespecificday == '5' || fivespecificday == '6' || fivespecificday == '7' || fivespecificday == '8' || fivespecificday == '9'){
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )
            }else{
              const suma5 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia5);
              this.newsuma5 = suma5.length;
              console.log(suma5)
              console.log(this.newsuma5, dia5 )                     
            }
           
  
          }
  
                                        }
         // 4 dias atras
         const dia4 = moment().add(-4,'days').format('dddd, MMMM Dº YYYY'); 
         const fourmonth =moment().add(-4, 'days').format('MMMM');
         const fourday = moment().add(-4,'days').format('dddd');
         const fourspecificday = moment().add(-4,'days').format('D');
         console.log(dia4) 
         console.log(fourmonth);
         console.log(fourday);
         console.log(fourspecificday);
         if(fourmonth == 'enero' || fourmonth == 'marzo' || fourmonth == 'abril' || fourmonth == 'junio' || fourmonth == 'julio' ){
          if(fourday == 'lunes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                    
            }
            
  
          }else if(fourday == 'martes' || fourday == 'jueves' || fourday == 'sábado'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                
            }
           
  
          }else if(fourday == 'miércoles'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
           
  
          }else if(fourday == 'domingo' || fourday == 'viernes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
           
  
          }
        
           
        } else if(fourmonth == 'agosto' ) {
          if(fourday == 'lunes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                
            }
           
  
          }else if(fourday == 'martes' || fourday == 'jueves' || fourday == 'sábado'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                
            }
            
  
          }else if(fourday == 'miércoles'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                               
            }
           
  
          }else if(fourday == 'domingo' || fourday == 'viernes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                              
            }
           
  
          }
        
  
        } else if (fourmonth == 'febrero' || fourmonth == 'octubre' ){
          if(fourday == 'lunes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
          
  
          }else if(fourday == 'martes' || fourday == 'jueves' || fourday == 'sábado'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
          
  
          }else if(fourday == 'miércoles'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
            
  
          }else if(fourday == 'domingo' || fourday == 'viernes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                
            }
         
  
          }
        
  
        } else if (fourmonth == 'noviembre' || fourmonth == 'diciembre'){
          if(fourday == 'lunes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                
            }
          
  
          }else if(fourday == 'martes' || fourday == 'jueves' || fourday == 'sábado'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia4);
            this.newsuma4 = suma4.length;
            console.log(suma4)
            console.log(this.newsuma4, dia4 )                                  
            }
            
  
          }else if(fourday == 'miércoles'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia4);
            this.newsuma4 = suma4.length;
            console.log(suma4)
            console.log(this.newsuma4, dia4 )                                  
            }
            
  
          }else if(fourday == 'domingo' || fourday == 'viernes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                
            }
           
          }
  
        }else if (fourmonth == 'septiembre'){
          if(fourday == 'lunes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia4);
            this.newsuma4 = suma4.length;
            console.log(suma4)
            console.log(this.newsuma4, dia4 )                                  
            }
            
  
          }else if(fourday == 'martes' || fourday == 'jueves' || fourday == 'sábado'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
            
  
          }else if(fourday == 'miércoles'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,30) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                
            }
           
  
          }else if(fourday == 'domingo' || fourday == 'viernes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                
            }
           
  
          }
  
  
        }else if (fourmonth == 'mayo'){
          if(fourday == 'lunes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
           
  
          }else if(fourday == 'martes' || fourday == 'jueves' || fourday == 'sábado'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
            
  
          }else if(fourday == 'miércoles'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia4);
            this.newsuma4 = suma4.length;
            console.log(suma4)
            console.log(this.newsuma4, dia4 )                                  
            }
            
  
          }else if(fourday == 'domingo' || fourday == 'viernes'){
            if(fourspecificday == '1' || fourspecificday == '2' || fourspecificday == '3' || fourspecificday == '4' || fourspecificday == '5' || fourspecificday == '6' || fourspecificday == '7' || fourspecificday == '8' || fourspecificday == '9'){
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )
            }else{
              const suma4 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia4);
              this.newsuma4 = suma4.length;
              console.log(suma4)
              console.log(this.newsuma4, dia4 )                                 
            }
            
  
          }
  
                                        }
         // 3 dias atras
         const dia3 = moment().add(-3,'days').format('dddd, MMMM Dº YYYY'); 
         const threemonth =moment().add(-3, 'days').format('MMMM');
         const threeday = moment().add(-3,'days').format('dddd');
         const threespecificday = moment().add(-3,'days').format('D');
         console.log(dia3) 
         console.log(threemonth);
         console.log(threeday);
         console.log(threespecificday) 


          if(threemonth == 'enero' || threemonth == 'marzo' || threemonth == 'abril' || threemonth == 'junio' || threemonth == 'julio' ){
          if(threeday == 'lunes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia3);
            this.newsuma3 = suma3.length;
            console.log(suma3)
            console.log(this.newsuma3, dia3 )                                  
            }
            
  
          }else if(threeday == 'martes' || threeday == 'jueves' || threeday == 'sábado'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                            
            }
           
  
          }else if(threeday == 'miércoles'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                            
            }
            
  
          }else if(threeday == 'domingo' || threeday == 'viernes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
           
  
          }
        
           
        } else if(threemonth == 'agosto' ) {
          if(threeday == 'lunes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                            
            }
           
  
          }else if(threeday == 'martes' || threeday == 'jueves' || threeday == 'sábado'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                              
            }
           
  
          }else if(threeday == 'miércoles'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
           
  
          }else if(threeday == 'domingo' || threeday == 'viernes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
           
  
          }
        
  
        } else if (threemonth == 'febrero' || threemonth == 'octubre' ){
          if(threeday == 'lunes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
            
  
          }else if(threeday == 'martes' || threeday == 'jueves' || threeday == 'sábado'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
           
  
          }else if(threeday == 'miércoles'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
            
  
          }else if(threeday == 'domingo' || threeday == 'viernes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
         
  
          }
        
  
        } else if (threemonth == 'noviembre' || threemonth == 'diciembre'){
          if(threeday == 'lunes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                            
            }
            
  
          }else if(threeday == 'martes' || threeday == 'jueves' || threeday == 'sábado'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
          
  
          }else if(threeday == 'miércoles'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                            
            }
            
  
          }else if(threeday == 'domingo' || threeday == 'viernes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
            
          }
  
        }else if (threemonth == 'septiembre'){
          if(threeday == 'lunes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
            
  
          }else if(threeday == 'martes' || threeday == 'jueves' || threeday == 'sábado'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                           
            }
           
  
          }else if(threeday == 'miércoles'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,30) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
           
            
          }else if(threeday == 'domingo' || threeday == 'viernes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
    
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
                                                  
            }
           
          }
  
  
        }else if (threemonth == 'mayo'){
          if(threeday == 'lunes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
            
  
          }else if(threeday == 'martes' || threeday == 'jueves' || threeday == 'sábado'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
           
  
          }else if(threeday == 'miércoles'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                             
            }
            
  
          }else if(threeday == 'domingo' || threeday == 'viernes'){
            if(threespecificday == '1' || threespecificday == '2' || threespecificday == '3' || threespecificday == '4' || threespecificday == '5' || threespecificday == '6' || threespecificday == '7' || threespecificday == '8' || threespecificday == '9'){
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )
            }else{
              const suma3 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia3);
              this.newsuma3 = suma3.length;
              console.log(suma3)
              console.log(this.newsuma3, dia3 )                                               
            }
            
  
          }
  
                                        }
         // 2 dias atras
         const dia2 = moment().add(-2,'days').format('dddd, MMMM Dº YYYY'); 
         const twomonth =moment().add(-2, 'days').format('MMMM');
         const twoday = moment().add(-2,'days').format('dddd');
         const twospecificday = moment().add(-2,'days').format('D');
         console.log(dia2) 
         console.log(twomonth);
         console.log(twoday);
         console.log(twospecificday) 
        
         if(twomonth == 'enero' || twomonth == 'marzo' || twomonth == 'abril' || twomonth == 'junio' || twomonth == 'julio' ){
          if(twoday == 'lunes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                            
            }
           
  
          }else if(twoday == 'martes' || twoday == 'jueves' || twoday == 'sábado'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
           
  
          }else if(twoday == 'miércoles'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
            
  
          }else if(twoday == 'domingo' || twoday == 'viernes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
           


            
  
          }
        
           
        } else if(twomonth == 'agosto' ) {
          if(twoday == 'lunes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                          
            }
           
  
          }else if(twoday == 'martes' || twoday == 'jueves' || twoday == 'sábado'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                          
            }
          
  
          }else if(twoday == 'miércoles'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
           
  
          }else if(twoday == 'domingo' || twoday == 'viernes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                        
            }
          
  
          }
        
  
        } else if (twomonth == 'febrero' || twomonth == 'octubre' ){
          if(twoday == 'lunes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                       
            }
            
  
          }else if(twoday == 'martes' || twoday == 'jueves' || twoday == 'sábado'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,23) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia2);
            this.newsuma2 = suma2.length;
            console.log(suma2)
            console.log(this.newsuma2, dia2 )                                                          
            }
            
  
          }else if(twoday == 'miércoles'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia2);
            this.newsuma2 = suma2.length;
            console.log(suma2)
            console.log(this.newsuma2, dia2 )                                                          
            }
            
  
          }else if(twoday == 'domingo' || twoday == 'viernes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
         
  
          }
        
  
        } else if (twomonth == 'noviembre' || twomonth == 'diciembre'){
          if(twoday == 'lunes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
           
  
          }else if(twoday == 'martes' || twoday == 'jueves' || twoday == 'sábado'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
         
  
          }else if(twoday == 'miércoles'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
           
  
          }else if(twoday == 'domingo' || twoday == 'viernes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                          
            }
          
          }
  
        }else if (twomonth == 'septiembre'){
          if(twoday == 'lunes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
            
  
          }else if(twoday == 'martes' || twoday == 'jueves' || twoday == 'sábado'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,26) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
            
  
          }else if(twoday == 'miércoles'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,29) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,30) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
           
  
          }else if(twoday == 'domingo' || twoday == 'viernes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,27) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,28) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                        
            }
          
  
          }
  
  
        }else if (twomonth == 'mayo'){
          if(twoday == 'lunes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,19) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                      
            }
           
  
          }else if(twoday == 'martes' || twoday == 'jueves' || twoday == 'sábado'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,20) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
           
  
          }else if(twoday == 'miércoles'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,25) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,24) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                         
            }
          
  
          }else if(twoday == 'domingo' || twoday == 'viernes'){
            if(twospecificday == '1' || twospecificday == '2' || twospecificday == '3' || twospecificday == '4' || twospecificday == '5' || twospecificday == '6' || twospecificday == '7' || twospecificday == '8' || twospecificday == '9'){
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,21) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )
            }else{
              const suma2 = this.allcitas.filter(x => x.data.fechaCreate.slice(0,22) == dia2);
              this.newsuma2 = suma2.length;
              console.log(suma2)
              console.log(this.newsuma2, dia2 )                                                        
            }
           
  
          }
  

                                        }
                                     
         
         // suma de dias
         this.citassemanapasada=((this.newcitasayer)+(this.newsuma2)+(this.newsuma3)+(this.newsuma4)+(this.newsuma5)+(this.newsuma6)+(this.newsuma7));
     
     
     

    })
  }
  getcitasindicadas(event){     
   // $("#fecha" ).datepicker( "option", "dateFormat", "dd-mm-yy" ); 
      var  fechas_seleccionada= this.fechaindicada; 
      console.log("fheca indicada", fechas_seleccionada);
      this.fechadeseleccion=fechas_seleccionada;
      //this.fechadeseleccion=moment(fechas_seleccionada).format();
      // const dia2 = moment().add(-2,'days').format('dddd, MMMM Dº YYYY');
      // nueva linea aumentada
      //let latest_date =this.datepipe.transform(fechas_seleccionada, 'dddd, MMMM Dº YYYY');
      //console.log(latest_date);
      //const fecha = moment(this.allcitas[0].data.fechaCreate).format('YYYY-MM-DD');
      //console.log("primera fecha",this.allcitas[0].data.fechaCreate);
      //console.log("fehca modificada",moment(this.allcitas[0].data.fechaCreate).format('YYYY-MM-DD')); 
      const citasindicada = this.allcitas.filter(x => moment(x.data.fechaCreate).format('YYYY') == fechas_seleccionada);
      console.log("primera fecha",this.allcitas[0].data.fechaCreate);
      this.newcitasindicada = citasindicada.length;
      console.log(citasindicada);
      console.log(this.newcitasindicada, fechas_seleccionada)    
  }





 
}


