import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentTypeComponent } from './update-payment-type.component';

describe('UpdatePaymentTypeComponent', () => {
  let component: UpdatePaymentTypeComponent;
  let fixture: ComponentFixture<UpdatePaymentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
