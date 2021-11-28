import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInstituitionTableComponent } from './payment-instituition-table.component';

describe('PaymentInstituitionTableComponent', () => {
  let component: PaymentInstituitionTableComponent;
  let fixture: ComponentFixture<PaymentInstituitionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInstituitionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInstituitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
