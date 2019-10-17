import { ValidatorFn } from '@angular/forms';

export class DynamicValidator{
    validator: ValidatorFn;
    type: ValidationType;
    message: string;
  
    constructor(type: ValidationType, validator: ValidatorFn, message: string){
      this.type = type;
      this.validator = validator;
      this.message = message;
    }
  }
  
  export enum ValidationType{
    required = 1,
    minlength = 2,
    pattern = 3
  }