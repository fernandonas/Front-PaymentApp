import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IPaymentTypeRequest } from '@interfaces/payment-type.interface';
import { PaymentTypeService } from '@services/payment-type.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-payment-type-modal',
  templateUrl: './add-payment-type-modal.component.html',
  styleUrls: ['./add-payment-type-modal.component.less']
})
export class AddPaymentTypeModalComponent implements OnInit, OnDestroy {
  @Output() response = new EventEmitter();

  subscription: Subscription = new Subscription();
  isVisible = false;
  addPaymentTypeForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly paymentTypeService: PaymentTypeService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public addPaymentType(paymentTypeRequest: IPaymentTypeRequest): void {
    this.subscription.add(
      this.paymentTypeService.addPaymentType(paymentTypeRequest)
        .subscribe(() => {
          this.response.emit();
          this.addPaymentTypeForm.reset();
          this.isVisible = false;
        }));
  }

  private createForm(): void {
    this.addPaymentTypeForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  public handleOk(): void {
    if (this.addPaymentTypeForm.valid) {
      this.addPaymentType(this.addPaymentTypeForm.value);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
