import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { LoaderHelper } from '@helpers/loader.helper';
import { IPaymentTypeResponse } from '@interfaces/payment-type.interface';
import { PaymentTypeService } from '@services/payment-type.service';

@Component({
  selector: 'app-update-payment-type',
  templateUrl: './update-payment-type.component.html',
  styleUrls: ['./update-payment-type.component.less']
})
export class UpdatePaymentTypeComponent implements OnInit, OnDestroy {
  @Output() response = new EventEmitter();

  subscription: Subscription = new Subscription();
  updatePaymentTypeForm: FormGroup;
  loading = new LoaderHelper();
  isVisible = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly paymentTypeService: PaymentTypeService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.updatePaymentTypeForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required]
    })
  }

  public updatePaymentType(paymentTypeResponse: IPaymentTypeResponse): void {
    this.subscription.add(this.paymentTypeService.updatePaymentType(paymentTypeResponse)
      .subscribe(() => {
        this.response.emit();
        this.updatePaymentTypeForm.reset();
        this.isVisible = false;
        this.loading.disable();
      },
        (error: HttpErrorResponse) => {
          this.updatePaymentTypeForm.setErrors(error.error.detailedMessage);
          this.loading.disable();
        }));
  }

  public handleOk(): void {
    this.loading.enable();
    if (this.updatePaymentTypeForm.valid) {
      this.updatePaymentType(this.updatePaymentTypeForm.value);
    } else {
      this.isVisible = true;
    }
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public handleModalOpenStatus(paymentTypeResponse: IPaymentTypeResponse): void {
    this.updatePaymentTypeForm.setValue({
      name: paymentTypeResponse.name,
      id: paymentTypeResponse.id
    });
    this.isVisible = !this.isVisible;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
