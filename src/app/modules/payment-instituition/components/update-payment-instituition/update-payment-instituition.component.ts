import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { LoaderHelper } from '@helpers/loader.helper';
import { IPaymentInstituitionResponse } from '@interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from '@services/payment-instituition.service';

@Component({
  selector: 'app-update-payment-instituition',
  templateUrl: './update-payment-instituition.component.html',
  styleUrls: ['./update-payment-instituition.component.less']
})
export class UpdatePaymentInstituitionComponent implements OnInit, OnDestroy {
  @Output() response = new EventEmitter();

  subscription: Subscription = new Subscription();
  updatePaymentInstituitionForm: FormGroup;
  loading = new LoaderHelper();
  isVisible = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly paymentInstituitionService: PaymentInstituitionService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.updatePaymentInstituitionForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required]
    })
  }

  public updatePaymentType(paymentInstituitionResponse: IPaymentInstituitionResponse): void {
    this.subscription.add(this.paymentInstituitionService.updatePaymentInstituition(paymentInstituitionResponse)
      .subscribe(() => {
        this.response.emit();
        this.updatePaymentInstituitionForm.reset();
        this.isVisible = false;
        this.loading.disable();
      },
        (error: HttpErrorResponse) => {
          this.updatePaymentInstituitionForm.setErrors(error.error.detailedMessage);
          this.loading.disable();
        }));
  }

  public handleOk(): void {
    this.loading.enable();
    if (this.updatePaymentInstituitionForm.valid) {
      this.updatePaymentType(this.updatePaymentInstituitionForm.value);
    } else {
      this.isVisible = true;
    }
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public handleModalOpenStatus(paymentInstituitionResponse: IPaymentInstituitionResponse): void {
    this.updatePaymentInstituitionForm.setValue({
      name: paymentInstituitionResponse.name,
      id: paymentInstituitionResponse.id
    });
    this.isVisible = !this.isVisible;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
