import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeTableComponent } from './payment-type-table.component';

describe('PaymentTypeTableComponent', () => {
  let component: PaymentTypeTableComponent;
  let fixture: ComponentFixture<PaymentTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTypeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
