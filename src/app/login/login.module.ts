import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, SigninComponent, SignupComponent],
  imports: [CommonModule, SharedModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  exports: [],
})
export class LoginModule { }
