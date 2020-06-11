import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  public consultas;

  constructor(public consultaSrv: ConsultasService) { }

  ngOnInit() {
    this.getAllConsultas();
  }

  getAllConsultas(){
    this.consultaSrv.getAllConsultas().subscribe(data =>{
      this.consultas = data.map( d =>{
        return {
            id: d.payload.doc.id,
            idUser: d.payload.doc.data()['idUsuaio'],
            nombre: d.payload.doc.data()['nombreUsuario'],
            apellidopUsuario: d.payload.doc.data()['apellidopUsuario'],
            apellidomUsuario: d.payload.doc.data()['apellidomUsuario'],
            diagnostico: d.payload.doc.data()['datosConsulta']['diagnostic'],
            hourDate: d.payload.doc.data()['hourDate'],
            datetime: d.payload.doc.data()['datetime'],
            receta: d.payload.doc.data()['datosConsulta']['prescription'],
        }
      })
      console.log('this.consultas:',this.consultas);
    })
  }

  openModalDetail(c){
    console.log(c);
    alert(JSON.stringify(c));
    console.log('abrir un modal con datos');
  }

}
