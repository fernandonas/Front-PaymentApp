import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IPaymentInstituitionResponse } from 'src/app/modules/shared/interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from 'src/app/modules/shared/services/payment-instituition.service';

@Component({
  selector: 'app-payment-instituition-table',
  templateUrl: './payment-instituition-table.component.html',
  styleUrls: ['./payment-instituition-table.component.less']
})
export class PaymentInstituitionTableComponent {
  paymentInstituitions: IPaymentInstituitionResponse[];
  loading: boolean;

  constructor(
    private readonly paymentInstituitionService: PaymentInstituitionService,
    private readonly modal: NzModalService
  ) {
    this.getPaymentInstituitions();
  }

  private deletePaymentInstituition(paymentIntituitionResponse: IPaymentInstituitionResponse): void {
    this.paymentInstituitionService.deletePaymentInstituition(paymentIntituitionResponse).subscribe(() => this.getPaymentInstituitions());
  }

  public getPaymentInstituitions(): void {
    this.loading = true
    this.paymentInstituitionService.getPaymentInstituitions().subscribe(
      paymentTypes => {
        this.paymentInstituitions = paymentTypes;
        this.loading = false;
      }
    )
  }

  showDeleteConfirm(paymentInstituitionResponse: IPaymentInstituitionResponse): void {
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
}
