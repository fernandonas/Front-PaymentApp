import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-payment-type-modal',
  templateUrl: './add-payment-type-modal.component.html',
  styleUrls: ['./add-payment-type-modal.component.less']
})
export class AddPaymentTypeModalComponent {
  @Input() isVisible: boolean;
  @Output() response = new EventEmitter();
  addPaymentTypeForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  createForm (): void {
    this.addPaymentTypeForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  handleOk(): void {
    if (this.addPaymentTypeForm.valid) {
      this.response.emit(this.addPaymentTypeForm.value)
      this.addPaymentTypeForm.reset();
      this.isVisible = false;
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
