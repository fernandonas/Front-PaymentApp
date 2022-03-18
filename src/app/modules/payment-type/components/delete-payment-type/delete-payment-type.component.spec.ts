import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaymentTypeComponent } from './delete-payment-type.component';

describe('DeletePaymentTypeComponent', () => {
  let component: DeletePaymentTypeComponent;
  let fixture: ComponentFixture<DeletePaymentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePaymentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePaymentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
