import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInstituitionComponent } from './payment-instituition.component';

describe('PaymentInstituitionComponent', () => {
  let component: PaymentInstituitionComponent;
  let fixture: ComponentFixture<PaymentInstituitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInstituitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInstituitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
