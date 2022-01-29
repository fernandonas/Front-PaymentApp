import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { NzModalService } from 'ng-zorro-antd/modal';

import { IPaymentInstituitionResponse } from '@interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from '@services/payment-instituition.service';
import { LoaderHelper } from '@helpers/loader.helper';

@Component({
  selector: 'app-payment-instituition-table',
  templateUrl: './payment-instituition-table.component.html',
  styleUrls: ['./payment-instituition-table.component.less']
})
export class PaymentInstituitionTableComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  paymentInstituitions: IPaymentInstituitionResponse[];
  loading = new LoaderHelper();

  constructor(
    private readonly paymentInstituitionService: PaymentInstituitionService,
    private readonly modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.getPaymentInstituitions();
  }

  private deletePaymentInstituition(paymentIntituitionResponse: IPaymentInstituitionResponse): void {
    this.subscription.add(
      this.paymentInstituitionService.deletePaymentInstituition(paymentIntituitionResponse)
        .subscribe(() => this.getPaymentInstituitions()));
  }

  public getPaymentInstituitions(): void {
    this.loading.enable();
    this.subscription.add(this.paymentInstituitionService.getPaymentInstituitions()
      .subscribe(
        paymentTypes => {
          this.paymentInstituitions = paymentTypes;
          this.loading.disable();
        }
      ));
  }

  public showDeleteConfirm(paymentInstituitionResponse: IPaymentInstituitionResponse): void {
    this.modal.confirm({
      nzTitle: `Tem certeza que deseja deletar ${paymentInstituitionResponse.name}?`,
      nzContent: '',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deletePaymentInstituition(paymentInstituitionResponse),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
