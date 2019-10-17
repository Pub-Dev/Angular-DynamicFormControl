import { FormControl, ValidatorFn } from '@angular/forms';
import { DynamicValidator } from './dynamic-validator';

export class DynamicFormControl extends FormControl{
    mapValidators: DynamicValidator[]
  
    constructor(formState: any, map: DynamicValidator[]){
  
      let validators: ValidatorFn[];
      validators = map.map(item => item.validator);
  
      super(formState, validators, null)
  
      this.mapValidators = [ ...map ];
    }
  }