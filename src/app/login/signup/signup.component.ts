import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Signup } from 'src/app/models/signup.model';
import { DynamicValidator, ValidationType } from 'src/app/shared/DynamicFormControl/dynamic-validator';
import { DynamicFormControl } from 'src/app/shared/DynamicFormControl/dynamic-form-control';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUp: Signup;
  formGroup: FormGroup;

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder) { 
  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      cpf: new DynamicFormControl('', [
        new DynamicValidator(ValidationType.required, Validators.required, "Este campo é obrigatório."), 
        new DynamicValidator(ValidationType.pattern, Validators.pattern("([0-9]{2}.[0-9]{3}.[0-9]{3}[\/]?[0-9]{4}-[0-9]{2})|([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})"), "Formato do CPF inválido.")
      ]),
      email: new DynamicFormControl('', [
        new DynamicValidator(ValidationType.required, Validators.required, "Este campo é obrigatório."), 
        new DynamicValidator(ValidationType.pattern, Validators.pattern("[^@]*@[^@]*"), "Formato do e-mail inválido.")
      ]),
      password: new DynamicFormControl('', [
        new DynamicValidator(ValidationType.required, Validators.required, "Este campo é obrigatório."), 
        new DynamicValidator(ValidationType.minlength, Validators.minLength(8), "Deve conter no minimo 8 caracteres.")
      ])
    })
  }

  onSignUp(){
    console.log(this.formGroup.controls.cpf.value, this.formGroup.controls.email.value, this.formGroup.controls.password.value);
    if(this.formGroup.valid)
      this.loginService.SignUp(this.signUp.cpf, this.signUp.email, this.signUp.password);
  }

  showValidation(formControl: FormControl, validation: string){
    let needValidation : boolean;

    if(validation === "required")
      needValidation = formControl.errors !== null && formControl.errors.required;
    if(validation === "minlength")
      needValidation = formControl.errors !== null && formControl.errors.minlength;
    if(validation === "pattern")
      needValidation = formControl.errors !== null && formControl.errors.pattern;

    return needValidation && formControl.touched && !formControl.pristine;
  }
}



