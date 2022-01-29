import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IPaymentInstituitionRequest } from '@interfaces/payment-instituition.interface';
import { PaymentInstituitionService } from '@services/payment-instituition.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-payment-instituition',
  templateUrl: './add-payment-instituition.component.html',
  styleUrls: ['./add-payment-instituition.component.less']
})
export class AddPaymentInstituitionComponent implements OnInit, OnDestroy {
  @Output() response = new EventEmitter();
  subscription: Subscription = new Subscription();

  isVisible = false;
  addPaymentInstituitionForm: FormGroup;

  constructor(
    private readonly paymentInstituitionService: PaymentInstituitionService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.addPaymentInstituitionForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  public addPaymentInstituition(paymentInstituitionRequest: IPaymentInstituitionRequest): void {
    this.subscription.add(this.paymentInstituitionService.addPaymentInstituition(paymentInstituitionRequest).subscribe(() => {
      this.response.emit();
      this.addPaymentInstituitionForm.reset();
      this.isVisible = false;
    }));
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
