import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPaymentInstituitionResponse } from 'src/app/modules/shared/interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from 'src/app/modules/shared/services/payment-instituition.service';

@Component({
  selector: 'app-update-payment-instituition',
  templateUrl: './update-payment-instituition.component.html',
  styleUrls: ['./update-payment-instituition.component.less']
})
export class UpdatePaymentInstituitionComponent {

  @Output() response = new EventEmitter();
  isVisible: boolean;
  updatePaymentInstituitionForm: FormGroup;
  loading: boolean = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly paymentInstituitionService: PaymentInstituitionService,
  ) {
    this.createForm();
   }

  private createForm(): void {
    this.updatePaymentInstituitionForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required]
    })
  }

  public updatePaymentType(paymentInstituitionResponse: IPaymentInstituitionResponse): void {
    this.paymentInstituitionService.updatePaymentInstituition(paymentInstituitionResponse).subscribe(() => {
      this.response.emit()
      this.updatePaymentInstituitionForm.reset();
      this.isVisible = false;
      this.loading = false;
    },
    (error: HttpErrorResponse) => {
      this.updatePaymentInstituitionForm.setErrors(error.error.detailedMessage);
      this.loading = false;
    });
  }

  handleOk(): void {
    this.loading = true;
    if (this.updatePaymentInstituitionForm.valid) {
      this.updatePaymentType(this.updatePaymentInstituitionForm.value);
    } else {
      this.isVisible = true;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleModalOpenStatus(paymentInstituitionResponse: IPaymentInstituitionResponse): void {
    this.updatePaymentInstituitionForm.setValue({
      name: paymentInstituitionResponse.name,
      id: paymentInstituitionResponse.id
    });
    this.isVisible = !this.isVisible;
  }
 }
