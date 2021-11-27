import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IPaymentTypeResponse } from 'src/app/modules/shared/interfaces/payment-type.interface';
import { PaymentTypeService } from 'src/app/modules/shared/services/payment-type.service';

@Component({
  selector: 'app-payment-type-table',
  templateUrl: './payment-type-table.component.html',
  styleUrls: ['./payment-type-table.component.less']
})
export class PaymentTypeTableComponent {
  paymentTypes: IPaymentTypeResponse[] = [];
  isAddModalOpen: boolean = false;

  loading: boolean;

  constructor(
    private readonly paymentTypeService: PaymentTypeService,
    private readonly modal: NzModalService
  ) {
    this.getPaymentTypes();
  }

  public getPaymentTypes(): void {
    this.loading = true
    this.paymentTypeService.getPaymentTypes().subscribe(
      paymentTypes => {
        this.paymentTypes = paymentTypes;
        this.loading = false;
      }
    )
  }

  private deletePaymentType(paymentTypeResponse: IPaymentTypeResponse): void {
    this.paymentTypeService.deletePaymentType(paymentTypeResponse).subscribe(() => this.getPaymentTypes());
  }

  showDeleteConfirm(paymentTypeResponse: IPaymentTypeResponse): void {
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
}
