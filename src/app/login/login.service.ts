import { Injectable } from '@angular/core';
import { Login } from '../core/request/login.request';
import { Router } from '@angular/router';
import { HttpService } from '../http/http.service';
import { Signup } from '../core/request/signup.request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService,
    private router: Router) { }

  SignIn(login: string,
    password: string) {

    let request = new Login(login, password);
    console.log(request);

    this.httpService
      .post<import("src/app/core/response/login.response").Login>("https://virtue.free.beeceptor.com", request)
      .subscribe((response) => {
        console.log(response);
        let isSuccess = response.body.isTrue;
        if (isSuccess)
          this.router.navigateByUrl('/profile');
      })
  }

  SignUp(cpf: string,
    email: string,
    password: string) {

    let request = new Signup(cpf, email, password);
    console.log(request);

    this.httpService.post<import("src/app/core/response/signup.response").Signup>("https://virtue.free.beeceptor.com", request)
      .subscribe(response => {
        console.log(response);
        this.SignIn(cpf, password);
      });
  }
}
