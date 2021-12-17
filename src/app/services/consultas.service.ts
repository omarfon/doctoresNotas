import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private consultas: AngularFirestoreCollection<any>

  constructor(public afs: AngularFirestore) {

    this.consultas = afs.collection<any>('consultas');
  }

  saveInitAppointment(appointmentId, uid, uidDoctor) {
    this.afs.collection('consultas').doc(appointmentId).set({
      appointmentId: appointmentId,
      uid: uid,
      uidDoctor: uidDoctor
    }).catch(err => {
      console.log('error de escritura inicial', err)
    })
  }

  sendConsulta(newConsulta: any) {
    console.log('en el servicio:', newConsulta);
    return this.consultas.add(newConsulta);
  }

  getAllConsultas() {
    return this.afs.collection('consultas').snapshotChanges();
  }

  getDatesPerPatient(idUser) {
    console.log('idUser en servicio:', idUser);
    return this.afs.collection('consultas', ref => ref.where('idUsuaio', '==', idUser)).valueChanges();
  }

  getConsultasPerDoctor() {
    const doctorId = localStorage.getItem('dataDoctor');
    let doctor = JSON.parse(doctorId);
    const idDoctor = doctor.professionalId;
    console.log('idUser en servicio:', idDoctor);
    return this.afs.collection('consultas', ref => ref.where('professionalId', '==', idDoctor))
      .snapshotChanges();
  }

  getConsultasPerDay() {
    const doctorId = localStorage.getItem('dataDoctor');
    let doctor = JSON.parse(doctorId);
    const idDoctor = doctor.prodessionalId;
    return this.afs.collection('consultas', ref => ref.where('professionalId', '==', idDoctor)).snapshotChanges();
  }

  /* getDatesPerPatient(){
    return this.afs.collection('consultas', ref => ref.where('idUsuaio', '==', 2306)).valueChanges();
} */


getallconsultas(){
  return this.afs.collection('creacionCitas').valueChanges();
}
getdayconsultas(){
  const appointmentId = localStorage.getItem('data');
  const datacita = JSON.parse(appointmentId);
  const fechacita = datacita.appointmentDateTime;
  return this.afs.collection('creacionCitas', ref => ref.where('appointmentDateTime', '==', fechacita)).valueChanges();
  
}


}
