import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { HintValidationComponent } from './hint-validation/hint-validation.component';

@NgModule({
  declarations: [HintValidationComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    HintValidationComponent
  ]
})
export class SharedModule { }
