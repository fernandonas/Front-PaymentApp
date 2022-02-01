import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IPaymentInstituitionResponse } from '@interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from '@services/payment-instituition.service';
import { LoaderHelper } from '@helpers/loader.helper';

@Component({
  selector: 'app-payment-instituition-table',
  templateUrl: './payment-instituition-table.component.html',
  styleUrls: ['./payment-instituition-table.component.less']
})
export class PaymentInstituitionTableComponent implements OnInit {
  paymentInstituitions$: Observable<IPaymentInstituitionResponse[]>;
  loadingPaymentIntituitions = new LoaderHelper();

  constructor(
    private readonly paymentInstituitionService: PaymentInstituitionService
  ) { }

  ngOnInit(): void {
    this.getPaymentInstituitions();
  }

  public getPaymentInstituitions(): void {
    this.loadingPaymentIntituitions.enable();
    this.paymentInstituitions$ = this.paymentInstituitionService.getPaymentInstituitions()
      .pipe(
        map((paymentInstituitions) => {
          this.loadingPaymentIntituitions.disable();
          return paymentInstituitions;
        })
      );
  }
}
