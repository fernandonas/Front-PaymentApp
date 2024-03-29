import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

import { map } from 'rxjs/operators';

import { NzModalService } from 'ng-zorro-antd/modal';

import { IPaymentInstituitionResponse } from '@interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from '@services/payment-instituition.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-payment-instituition',
  templateUrl: './delete-payment-instituition.component.html',
  styleUrls: ['./delete-payment-instituition.component.less']
})
export class DeletePaymentInstituitionComponent implements OnDestroy {
  @Input() paymentIntituition: IPaymentInstituitionResponse;
  @Output() response: EventEmitter<any> = new EventEmitter<any>();
  subscription = new Subscription();

  constructor(
    private readonly modal: NzModalService,
    private readonly paymentInstituitionService: PaymentInstituitionService
  ) { }

  public showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: `Tem certeza que deseja deletar ${this.paymentIntituition.name}`,
      nzContent: '',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deletePaymentInstituition(),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  private deletePaymentInstituition(): void {
    this.paymentInstituitionService.deletePaymentInstituition(this.paymentIntituition)
      .pipe(
        map(() => {
          this.response.next();
        })
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
