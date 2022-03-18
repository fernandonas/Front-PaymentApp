import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoaderHelper } from '@helpers/loader.helper';
import { PaymentTypeService } from '@services/payment-type.service';
import { IPaymentTypeResponse } from '@interfaces/payment-type.interface';

@Component({
  selector: 'app-payment-type-table',
  templateUrl: './payment-type-table.component.html',
  styleUrls: ['./payment-type-table.component.less']
})
export class PaymentTypeTableComponent implements OnInit {
  paymentTypes$: Observable<IPaymentTypeResponse[]>;
  loading = new LoaderHelper();
  isAddModalOpen = false;

  constructor(
    private readonly paymentTypeService: PaymentTypeService
  ) { }

  ngOnInit(): void {
    this.getPaymentTypes();
  }

  public getPaymentTypes(): void {
    this.loading.enable();
    this.paymentTypes$ = this.paymentTypeService.getPaymentTypes()
      .pipe(
        map(paymentTypes => {
          this.loading.disable();
          return paymentTypes;
        })
      );
  }
}
