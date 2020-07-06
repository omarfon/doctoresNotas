import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitaspendientesComponent } from './paginas/citaspendientes/citaspendientes.component';
import { CitaComponent } from './paginas/cita/cita.component';
import { LoginComponent } from './paginas/login/login.component';
import { HomeComponent } from './paginas/home/home.component';
import { DetallecitaComponent } from './paginas/detallecita/detallecita.component';
import { AuthoGuard } from './guards/autho.guard';
import { RecetaComponent } from './paginas/receta/receta.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthoGuard] },
  { path: 'detalle', component: DetallecitaComponent },
  { path: 'detalle/:data', component: DetallecitaComponent },
  { path: 'home', component: HomeComponent, },
  { path: 'citas', component: CitaComponent },
  { path: 'citaspendientes', component: CitaspendientesComponent },
  { path: 'receta', component: RecetaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
