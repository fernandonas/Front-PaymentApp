import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPaymentInstituitionRequest } from '@interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from '@services/payment-instituition.service';

@Component({
  selector: 'app-add-payment-instituition',
  templateUrl: './add-payment-instituition.component.html',
  styleUrls: ['./add-payment-instituition.component.less']
})

export class AddPaymentInstituitionComponent {
  @Output() response = new EventEmitter();
  isVisible = false;
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

  public handleOk(): void {
    if (this.addPaymentInstituitionForm.valid) {
      this.addPaymentInstituition(this.addPaymentInstituitionForm.value);
    } else {
      this.isVisible = true;
    }
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public handleModalOpenStatus(): void {
    this.isVisible = !this.isVisible;
  }
}
