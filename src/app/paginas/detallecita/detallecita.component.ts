import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-detallecita',
  templateUrl: './detallecita.component.html',
  styleUrls: ['./detallecita.component.scss']
})
export class DetallecitaComponent implements OnInit {
  public consultaForm : FormGroup;
  public dataPaciente;

  constructor(public cs: ConsultasService,
              public router: Router,
              public route: ActivatedRoute) { 
    this.consultaForm = this.createForm();
  }

  get firstName() {return this.consultaForm.get('firstName');}
  get lastname() {return this.consultaForm.get('lastname');}
  get mlastname() {return this.consultaForm.get('mlastname');}
  get dni() {return this.consultaForm.get('dni');}
  get birthdate() {return this.consultaForm.get('birthdate');}
  get sex() {return this.consultaForm.get('sex');}

  ngOnInit() {
   /*  this.route.queryParams.subscribe(params =>{
      this.paciente = params['data'];
      console.log('this.paciente:', this.paciente);
    }) */
    let datosPaciente = this.route.snapshot.paramMap.get('data');
    this.dataPaciente = JSON.parse(datosPaciente);
    console.log('dataPaciente:',this.dataPaciente);
  }

  createForm(){
      return new FormGroup({
     /*    name : new FormControl('', [Validators.required]),
        lastname : new FormControl('', [Validators.required]),
        mlastname : new FormControl('', [Validators.required]),
        dni : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
        birthdate : new FormControl('', [Validators.required]),
        sex : new FormControl('', [Validators.required]), */
        motive : new FormControl('', [Validators.required]),
        exploration : new FormControl('', [Validators.required]),
        anamnesis : new FormControl('', [Validators.required]),
        pronostico : new FormControl('', [Validators.required]),
        diagnostic : new FormControl('', [Validators.required]),
        evolution : new FormControl('', [Validators.required]),
        prescription : new FormControl('', [Validators.required]),
        more : new FormControl('', [Validators.required]),
       /*  nombreUsuario : this.dataPaciente.patientName,
        apellidopUsuario : this.dataPaciente.patientLastname,
        apellidomUsuario : this.dataPaciente.patientLastname2,
        idUsuaio : this.dataPaciente.patientId,
        professionalId : this.dataPaciente.professionalId,
        hourDate : this.dataPaciente.time,
        date : this.dataPaciente.datetime,
        provisionDescription : this.dataPaciente.provisionDescription,
        appointmentlId : this.dataPaciente.appointmentId, */
      })
  }

  onReset(){
    this.consultaForm.reset();
  }

  onSaveForm():void{
    /* console.log('this.consultaForm.value:', this.consultaForm.value); */
    let datos = this.consultaForm.value;
    let data = {
        nombreUsuario : this.dataPaciente.patientName,
        apellidopUsuario : this.dataPaciente.patientLastname,
        apellidomUsuario : this.dataPaciente.patientLastname2,
        idUsuaio : this.dataPaciente.patientId,
        professionalId : this.dataPaciente.professionalId,
        hourDate : this.dataPaciente.time,
        date : this.dataPaciente.datetime,
        provisionDescription : this.dataPaciente.provisionDescription,
        appointmentlId : this.dataPaciente.appointmentId,
        datetime : this.dataPaciente.datetime,
        datosConsulta: datos
    }
     if(this.consultaForm.valid){
        this.cs.sendConsulta(data);
      this.onReset();
    }
  }
  
  
}
