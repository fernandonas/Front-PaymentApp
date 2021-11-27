import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPaymentTypeResponse } from 'src/app/modules/shared/interfaces/payment-type.interface';
import { PaymentTypeService } from 'src/app/modules/shared/services/payment-type.service';

@Component({
  selector: 'app-update-payment-type',
  templateUrl: './update-payment-type.component.html',
  styleUrls: ['./update-payment-type.component.less']
})
export class UpdatePaymentTypeComponent {
  @Output() response = new EventEmitter();
  isVisible: boolean;
  updatePaymentTypeForm: FormGroup;
  loading: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly paymentTypeService: PaymentTypeService,
  ) {
    this.createForm();
   }

  private createForm(): void {
    this.updatePaymentTypeForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required]
    })
  }

  public updatePaymentType(paymentTypeResponse: IPaymentTypeResponse): void {
    this.paymentTypeService.updatePaymentType(paymentTypeResponse).subscribe(() => {
      this.response.emit()
      this.updatePaymentTypeForm.reset();
      this.isVisible = false;
      this.loading = false;
    },
    (error: HttpErrorResponse) => {
      this.updatePaymentTypeForm.setErrors(error.error.detailedMessage);
      this.loading = false;
    });
  }

  handleOk(): void {
    this.loading = true;
    if (this.updatePaymentTypeForm.valid) {
      this.updatePaymentType(this.updatePaymentTypeForm.value);
    } else {
      this.isVisible = true;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleModalOpenStatus(paymentTypeResponse: IPaymentTypeResponse): void {
    this.updatePaymentTypeForm.setValue({
      name: paymentTypeResponse.name,
      id: paymentTypeResponse.id
    });
    this.isVisible = !this.isVisible;
  }
}
