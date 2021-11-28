import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPaymentInstituitionRequest } from 'src/app/modules/shared/interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from 'src/app/modules/shared/services/payment-instituition.service';

@Component({
  selector: 'app-add-payment-instituition',
  templateUrl: './add-payment-instituition.component.html',
  styleUrls: ['./add-payment-instituition.component.less']
})
export class AddPaymentInstituitionComponent {
  isVisible: boolean;
  @Output() response = new EventEmitter();
  addPaymentInstituitionForm: FormGroup;

  constructor(
    private readonly paymentInstituitionService: PaymentInstituitionService,
    private readonly formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm(): void {
    this.addPaymentInstituitionForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  public addPaymentInstituition(paymentInstituitionRequest: IPaymentInstituitionRequest): void {
    this.paymentInstituitionService.addPaymentInstituition(paymentInstituitionRequest).subscribe(() => {
      this.response.emit();
      this.addPaymentInstituitionForm.reset();
      this.isVisible = false;
    });
  }

  handleOk(): void {
    if (this.addPaymentInstituitionForm.valid) {
      this.addPaymentInstituition(this.addPaymentInstituitionForm.value);
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
