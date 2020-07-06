import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { MatDialog } from '@angular/material/dialog';
import { RecipeComponent } from 'src/app/modals/recipe/recipe.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as jsPDF from 'jspdf'


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  @ViewChild('drawer', { static: false }) drawer: ElementRef;
  @ViewChild('htmlData', { static: false }) htmlData: ElementRef;
  public consultas;
  showFiller = false;
  doctorData: any;

  constructor(public consultaSrv: ConsultasService,
    public modal: MatDialog,
    public matSide: MatSidenavModule) { }

  ngOnInit() {
    this.getAllConsultasPerDoctor();
  }

  getAllConsultasPerDoctor() {
    this.consultaSrv.getConsultasPerDoctor().subscribe(data => {
      this.consultas = data.map(d => {
        return {
          id: d.payload.doc.id,
          idUser: d.payload.doc.data()['idUsuaio'],
          nombre: d.payload.doc.data()['nombreUsuario'],
          apellidopUsuario: d.payload.doc.data()['apellidopUsuario'],
          apellidomUsuario: d.payload.doc.data()['apellidomUsuario'],
          diagnostico: d.payload.doc.data()['datosConsulta']['diagnostic'],
          hourDate: d.payload.doc.data()['hourDate'],
          datetime: d.payload.doc.data()['datetime'],
          receta: d.payload.doc.data()['recipe'],
          medicines: d.payload.doc.data()['datosConsulta']['medicines'],
        }
      })
      console.log('this.consultas:', this.consultas);
    })
  }

  openModalDetail(c) {
    console.log(c);
    alert(JSON.stringify(c));
    console.log('abrir un modal con datos');
  }

  openReceta(c) {
    this.doctorData = c;
    this.modal.open(RecipeComponent, {
      data: {
        c: c
      }
    });
    console.log('revisar receta', c);
  }

  /*   public openPDF(): void {
      let DATA = this.htmlData.nativeElement;
      let doc = new jsPDF('p', 'pt', 'a4');
      doc.fromHTML(DATA.innerHTML, 15, 15);
      doc.output('dataurlnewwindow');
    } */


  /*  public downloadPDF(): void {
     let DATA = this.htmlData.nativeElement;
     let doc = new jsPDF('p', 'pt', 'a4');
 
     let handleElement = {
       '#editor': function (element, renderer) {
         return true;
       }
     };
     doc.fromHTML(DATA.innerHTML, 15, 15, {
       'width': 200,
       'elementHandlers': handleElement
     });
     doc.save('receta');
   } */




}
