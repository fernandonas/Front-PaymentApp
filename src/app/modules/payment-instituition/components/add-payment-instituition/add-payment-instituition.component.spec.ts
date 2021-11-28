import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentInstituitionComponent } from './add-payment-instituition.component';

describe('AddPaymentInstituitionComponent', () => {
  let component: AddPaymentInstituitionComponent;
  let fixture: ComponentFixture<AddPaymentInstituitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentInstituitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentInstituitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
