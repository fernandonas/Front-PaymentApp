import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ReceiptService } from '@services/receipt.service';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.less']
})
export class AddReceiptComponent implements OnInit, OnDestroy {
  isVisible = false;
  addReceiptForm: FormGroup;
  subscription = new Subscription();
  fileName = 'CARREGAR COMPROVANTE';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly receiptService: ReceiptService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.addReceiptForm = this.formBuilder.group({
      name: [null, Validators.required],
      value: [null, Validators.required],
      paymentDate: [null, Validators.required]
    });
  }

  public handleModalOpenStatus(): void {
    this.isVisible = !this.isVisible;
  }

  public handleCancel(): void {
    this.addReceiptForm.reset();
    this.isVisible = false;
  }

  public handleOk(): void {
    this.validateForm();
    if (this.addReceiptForm.valid) {
      this.addReceipt();
      return;
    }
    this.isVisible = true;
  }

  private addReceipt(): void {
    this.subscription.add(this.receiptService.addReceipt(this.addReceiptForm.value).subscribe({
      next: () => {
        this.resetForm();
        this.isVisible = false;
      },
      error: (error: HttpErrorResponse) => {
        this.addReceiptForm.setErrors(error.error.detailedMessage);
      }
    }));
  }

  private resetForm(): void {
    this.fileName = 'CARREGAR COMPROVANTE';
    this.addReceiptForm.reset();
  }

  private validateForm(): void {
    Object.values(this.addReceiptForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  public handleFileInput(files: any) {
    let component = this;
    const file = files.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      component.addReceiptForm.controls.value.setValue(reader.result);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
    component.fileName = file.name;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
