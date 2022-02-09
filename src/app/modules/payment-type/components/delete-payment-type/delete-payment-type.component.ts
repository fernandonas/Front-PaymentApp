import { Component, EventEmitter, Input, Output } from '@angular/core';

import { map } from 'rxjs/operators';

import { NzModalService } from 'ng-zorro-antd/modal';

import { IPaymentTypeResponse } from '@interfaces/payment-type.interface';
import { PaymentTypeService } from '@services/payment-type.service';

@Component({
  selector: 'app-delete-payment-type',
  templateUrl: './delete-payment-type.component.html',
  styleUrls: ['./delete-payment-type.component.less']
})
export class DeletePaymentTypeComponent {
  @Input() paymentType: IPaymentTypeResponse;
  @Output() response: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private readonly modal: NzModalService,
    private readonly paymentTypeService: PaymentTypeService
  ) { }

  public showDeleteConfirm(paymentTypeResponse: IPaymentTypeResponse): void {
    this.modal.confirm({
      nzTitle: `Tem certeza que deseja deletar ${this.paymentType.name}?`,
      nzContent: '',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deletePaymentType(paymentTypeResponse),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  private deletePaymentType(paymentTypeResponse: IPaymentTypeResponse): void {
    this.paymentTypeService.deletePaymentType(paymentTypeResponse).pipe(
      map((() => this.response.next())
      )).subscribe();
  }

}
