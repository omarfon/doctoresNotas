import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private firstName : string;
  private password : string;
  private dataLoginSuccess;

  constructor(public auth: AuthService,
              public router: Router) { }

  ngOnInit() {
    this.getPublicKey();
  }

  getPublicKey(){
    this.auth.getKey().subscribe((data:any) =>{
      console.log('data',data);
      const keypublic = data.authorization;
      const role = data.role;
      if(keypublic){
        localStorage.setItem('authorization', keypublic);
        localStorage.setItem('role', role);
      }
    });
  }

  login(){
    let email = this.firstName;
    let password = this.password;
    this.auth.login(email , password).subscribe(data =>{
      this.dataLoginSuccess = data;
      if(this.dataLoginSuccess){
        localStorage.setItem('dataDoctor', JSON.stringify(this.dataLoginSuccess));
        this.router.navigate(['/home']);
      }
    },err =>{
      console.log('err',err);
    });
  }


}
