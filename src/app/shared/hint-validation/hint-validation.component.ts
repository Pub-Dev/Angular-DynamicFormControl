import { Component, OnInit, Input } from '@angular/core';
import { DynamicFormControl } from '../DynamicFormControl/dynamic-form-control';
import { ValidationType, DynamicValidator } from '../DynamicFormControl/dynamic-validator';

@Component({
  selector: 'hint-validation',
  templateUrl: './hint-validation.component.html',
  styleUrls: ['./hint-validation.component.scss']
})
export class HintValidationComponent implements OnInit {

  message: string;
  @Input() dynamicFormControl : DynamicFormControl;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    //default if doesn't have validation
    this.message = null;

    //look over every validation
    this.dynamicFormControl.mapValidators.forEach((dynamicValidator: DynamicValidator) => {
      if(this.showValidation(this.dynamicFormControl, dynamicValidator.type))
        this.message = this.dynamicFormControl.mapValidators.filter((item) => item.type === dynamicValidator.type)[0].message;
    })
  }

  showValidation(formControl: DynamicFormControl, validation: ValidationType){
    let needValidation : boolean;

    if(validation === ValidationType.required)
      needValidation = formControl.errors !== null && formControl.errors.required;
    if(validation === ValidationType.minlength)
      needValidation = formControl.errors !== null && formControl.errors.minlength;
    if(validation === ValidationType.pattern)
      needValidation = formControl.errors !== null && formControl.errors.pattern;

    return needValidation && formControl.touched && !formControl.pristine;
  }
}