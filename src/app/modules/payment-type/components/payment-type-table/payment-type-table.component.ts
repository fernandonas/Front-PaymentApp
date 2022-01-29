import { Component, OnDestroy, OnInit } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoaderHelper } from '@helpers/loader.helper';
import { PaymentTypeService } from '@services/payment-type.service';
import { IPaymentTypeResponse } from '@interfaces/payment-type.interface';

@Component({
  selector: 'app-payment-type-table',
  templateUrl: './payment-type-table.component.html',
  styleUrls: ['./payment-type-table.component.less']
})
export class PaymentTypeTableComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  paymentTypes$: Observable<IPaymentTypeResponse[]>;
  loading = new LoaderHelper();
  isAddModalOpen = false;

  constructor(
    private readonly paymentTypeService: PaymentTypeService,
    private readonly modal: NzModalService
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

  private deletePaymentType(paymentTypeResponse: IPaymentTypeResponse): void {
    this.subscription.add(this.paymentTypeService.deletePaymentType(paymentTypeResponse)
      .subscribe(() => this.getPaymentTypes()));
  }

  public showDeleteConfirm(paymentTypeResponse: IPaymentTypeResponse): void {
    this.modal.confirm({
      nzTitle: `Tem certeza que deseja deletar ${paymentTypeResponse.name}?`,
      nzContent: '',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deletePaymentType(paymentTypeResponse),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
