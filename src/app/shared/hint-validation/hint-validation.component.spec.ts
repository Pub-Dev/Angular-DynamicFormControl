import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintValidationComponent } from './hint-validation.component';

describe('HintValidationComponent', () => {
  let component: HintValidationComponent;
  let fixture: ComponentFixture<HintValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
