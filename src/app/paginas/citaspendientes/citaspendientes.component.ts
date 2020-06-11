import { Component, OnInit } from '@angular/core';
import { DatesService } from 'src/app/services/dates.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-citaspendientes',
  templateUrl: './citaspendientes.component.html',
  styleUrls: ['./citaspendientes.component.scss']
})
export class CitaspendientesComponent implements OnInit {

  public firstname;
  public lastname;
  public citas;
  
  constructor(public datesSrv: DatesService,
              public router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDates();
  }

  getDates(){
    this.datesSrv.getDates().subscribe(data => {
      this.citas = data
      console.log('data de dates;', this.citas,data);
    }, err =>{
      console.log(err);
    });
  }


  goTodetail(c){
    console.log('c:', c);
    let data = JSON.stringify(c);
    this.router.navigate(['/detalle', data ])
  }

}
