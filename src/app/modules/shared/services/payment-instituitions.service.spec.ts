import { TestBed } from '@angular/core/testing';

import { PaymentInstituitionService } from './payment-instituition.service';

describe('PaymentInstituitionsService', () => {
  let service: PaymentInstituitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentInstituitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
