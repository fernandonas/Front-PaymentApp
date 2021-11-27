import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPaymentTypeRequest } from 'src/app/modules/shared/interfaces/payment-type.interface';
import { PaymentTypeService } from 'src/app/modules/shared/services/payment-type.service';

@Component({
  selector: 'app-add-payment-type-modal',
  templateUrl: './add-payment-type-modal.component.html',
  styleUrls: ['./add-payment-type-modal.component.less']
})
export class AddPaymentTypeModalComponent {
  isVisible: boolean;
  @Output() response = new EventEmitter();
  addPaymentTypeForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly paymentTypeService: PaymentTypeService,
  ) {
    this.createForm();
  }

  public addPaymentType(paymentTypeRequest: IPaymentTypeRequest): void {
    this.paymentTypeService.addPaymentType(paymentTypeRequest).subscribe(() => {
      this.response.emit();
      this.addPaymentTypeForm.reset();
      this.isVisible = false;
    });
  }
  createForm (): void {
    this.addPaymentTypeForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  handleOk(): void {
    if (this.addPaymentTypeForm.valid) {
      this.addPaymentType(this.addPaymentTypeForm.value);
    } else {
      this.isVisible = true;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleModalOpenStatus(): void {
    this.isVisible = !this.isVisible;
  }
}
