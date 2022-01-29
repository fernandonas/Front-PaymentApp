import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
  paymentInstituitions$: Observable<IPaymentInstituitionResponse[]>;
  loadingPaymentIntituitions = new LoaderHelper();

  constructor(
    private readonly paymentInstituitionService: PaymentInstituitionService,
    private readonly modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.getPaymentInstituitions();
  }

  private deletePaymentInstituition(paymentIntituitionResponse: IPaymentInstituitionResponse): void {
    this.subscription.add(this.paymentInstituitionService.deletePaymentInstituition(paymentIntituitionResponse)
      .subscribe(() => this.getPaymentInstituitions()));
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
