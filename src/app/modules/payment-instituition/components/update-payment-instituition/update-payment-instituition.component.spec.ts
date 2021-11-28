import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentInstituitionComponent } from './update-payment-instituition.component';

describe('UpdatePaymentInstituitionComponent', () => {
  let component: UpdatePaymentInstituitionComponent;
  let fixture: ComponentFixture<UpdatePaymentInstituitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentInstituitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentInstituitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
