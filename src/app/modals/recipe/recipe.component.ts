import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitaComponent } from 'src/app/paginas/cita/cita.component';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
 

  public receta;
  public doctorData;

  constructor(public route: Router,
              public activateRouter: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
   console.log(this.data);
   this.receta = this.data.c.medicines;
   
   let doctordata = localStorage.getItem('dataDoctor');
   this.doctorData = JSON.parse(doctordata);
   console.log(this.doctorData);
  }

}
