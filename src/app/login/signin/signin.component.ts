import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  login: string = "";
  password: string = "";

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
  }

  onLogIn(){
    console.log([this.login, this.password])
    this.loginService.SignIn(this.login, this.password);
  }
}
