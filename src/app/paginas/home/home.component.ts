import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private data : any;
  name: any;

  constructor(private router: Router) { }

  ngOnInit() {
    const nombreDoctor = localStorage.getItem('dataDoctor');
    this.data = JSON.parse(nombreDoctor);
    this.name = this.data.name;
  }

  goToCitasPendientes(){
    this.router.navigate(['/citaspendientes']);
  }

  goToDetails(){
    this.router.navigate(['/citas']);
  }

}
