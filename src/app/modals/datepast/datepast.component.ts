import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ConsultasService } from 'src/app/services/consultas.service';



@Component({
  selector: 'app-datepast',
  templateUrl: './datepast.component.html',
  styleUrls: ['./datepast.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: true}
  }]
})
export class DatepastComponent implements OnInit {

  public consultas;

  constructor(public consultaSrv: ConsultasService) { }

  ngOnInit() {
    this.getDatesPat();
  }


  getDatesPat(){
    this.consultaSrv.getDatesPerPatient().subscribe(data =>{
      this.consultas = data;
      console.log(this.consultas);
    });
    
  }

}
