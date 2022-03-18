import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaymentInstituitionComponent } from './delete-payment-instituition.component';


describe('DeletePaymentInstituitionComponent', () => {
  let component: DeletePaymentInstituitionComponent;
  let fixture: ComponentFixture<DeletePaymentInstituitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePaymentInstituitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePaymentInstituitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
