import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


//Agora
import { NgxAgoraService, Stream, AgoraClient, ClientEvent, StreamEvent } from 'ngx-agora';
import * as moment from 'moment';
import { WebrtcService } from 'src/app/services/webrtc.service';
import { DatapacienteService } from 'src/app/services/datapaciente.service';
import {MatDialog} from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import { DatepastComponent } from 'src/app/modals/datepast/datepast.component';


@Component({
  selector: 'app-detallecita',
  templateUrl: './detallecita.component.html',
  styleUrls: ['./detallecita.component.scss']
})
export class DetallecitaComponent implements OnInit {
  public consultaForm : FormGroup;
  public dataPaciente;

  //Agora
  topVideoFrame = 'partner-video';
  userId: string ;
  partnerId: string ;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;

  title = 'angular-video';
  localCallId = 'agora_local';
  remoteCalls:  string[] = [];

  private client: AgoraClient;
  private localStream: Stream;
  private uid: number;

  private dates;
   nombrePaciente;
   apellidoPaciente;
   idPaciente;
  public time;
  public datosPaciente: any;

  constructor(public cs: ConsultasService,
              public router: Router,
              public route: ActivatedRoute,
              private webRTC: WebrtcService,
              private elRef: ElementRef,
              private ngxAgoraService: NgxAgoraService,
              private dataPacienteSrv: DatapacienteService,
              private modal: MatDialog,
              private _bottomSheet: MatBottomSheet) { 
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
    
    if(datosPaciente){
      this.getDataPaciente();
    }
    this.crhono();

  }
  

  initiVideo(){
    this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
    this.assignClientHandlers();
  
    this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
    this.assignLocalStreamHandlers();
    this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
    this.localStream.setVideoProfile('720p_3');
  }

  createForm(){
      return new FormGroup({
        motive : new FormControl('', [Validators.required, Validators.minLength(5)]),
        exploration : new FormControl('', [Validators.required, Validators.minLength(5)]),
        anamnesis : new FormControl('', [Validators.required, Validators.minLength(5)]),
        pronostico : new FormControl('', [Validators.required, Validators.minLength(5)]),
        diagnostic : new FormControl('', [Validators.required, Validators.minLength(5)]),
        evolution : new FormControl('', [Validators.required, Validators.minLength(5)]),
        more : new FormControl('', [Validators.required, Validators.minLength(5)]),
        medicines: new FormArray([
          new FormGroup({
            activeprinciple : new FormControl('',[Validators.required]),
            marc : new FormControl('',[Validators.required]),
            concentration : new FormControl('',[Validators.required]),
            presentation : new FormControl('',[Validators.required]),
            dosis : new FormControl('',[Validators.required]),
            frecuencia : new FormControl('',[Validators.required]),
            duration : new FormControl('',[Validators.required]),
            anotations:new FormControl('', [Validators.required])
          })
        ])
      })
  }

  getDataPaciente(){
    this.dataPacienteSrv.getDatesPatient(this.dataPaciente.patientId).subscribe(data =>{
          this.datosPaciente = data;
          console.log('this.datosPaciente:', this.datosPaciente);
    })
  }

  onReset(){
    this.consultaForm.reset();
  }

  onSaveForm():void{
    console.log('this.consultaForm.value:', this.consultaForm.value);
    console.log(this.dataPaciente);
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
       console.log('data enviada:', data);
         this.onReset();
    }
  }


  //Agora
  crhono(){
    setInterval(() =>{
      this.updateTime();
    }, 1000)
  }

  updateTime(){
    this.time = moment().format('hh:mm:ss');
  }
  /**
 * Attempts to connect to an online chat room where users can host and receive A/V streams.
 */
join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
  this.client.join(null, 'foo-bar', this.uid, onSuccess, onFailure);
}
/**
 * Attempts to upload the created local A/V stream to a joined chat room.
 */
publish(): void {
  this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
}

  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }

private initLocalStream(onSuccess?: () => any): void {
  this.localStream.init(
    () => {
       // The user has granted access to the camera and mic.
       this.localStream.play(this.localCallId);
       if (onSuccess) {
         onSuccess();
       }
    },
    err => console.error('getUserMedia failed', err)
  );
}

  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      console.log('Publish local stream successfully');
    });

    this.client.on(ClientEvent.Error, error => {
      console.log('Got error msg:', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          renewError => console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, evt => {
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: true }, err => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      if (!this.remoteCalls.length) {
        this.remoteCalls.push(id);
        setTimeout(() => stream.play(id), 1000);
      }
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }


  leave() {
    this.client.leave(() => {
      console.log("Leavel channel successfully");
    }, (err) => {
      console.log("Leave channel failed");
    });
    this.router.navigate(['/home']);
    this.localStream.close();
  }
  
  get medicines(){
    return this.consultaForm.get('medicines') as FormArray;
  }

  addNewMedicine(){
    this.medicines.push(
      new FormGroup({
            activeprinciple : new FormControl(''),
            marc : new FormControl(''),
            concentration : new FormControl(''),
            presentation : new FormControl(''),
            dosis : new FormControl(''),
            frecuencia : new FormControl(''),
            duration : new FormControl(''),
            anotations: new FormControl(''),
      })
    );
  }

  mute(){
    console.log('mute');
  }
  
  openModalCitas(){
    /* this._bottomSheet.open(DatepastComponent); */
    this.modal.open(DatepastComponent);
  }

  get motive(){
    return this.consultaForm.get('motive');
  }
  get exploration(){
    return this.consultaForm.get('exploration');
  }
  get anamnesis(){
    return this.consultaForm.get('anamnesis');
  }
  get pronostico(){
    return this.consultaForm.get('pronostico');
  }
  get diagnostic(){
    return this.consultaForm.get('diagnostic');
  }
  get evolution(){
    return this.consultaForm.get('evolution');
  }
  get more(){
    return this.consultaForm.get('more');
  }
}
