import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentTypeModalComponent } from './add-payment-type-modal.component';

describe('AddPaymentTypeModalComponent', () => {
  let component: AddPaymentTypeModalComponent;
  let fixture: ComponentFixture<AddPaymentTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
