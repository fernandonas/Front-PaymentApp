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
  imageBaseData: string | ArrayBuffer = null;
  fileName = '';

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
      value: [null, Validators.required]
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
    debugger
    this.addImageToForm();
    if (this.addReceiptForm.valid) {
      this.addReceipt();
      return;
    }
    this.isVisible = true;
  }
  
  private addReceipt(): void {
    this.subscription.add(this.receiptService.addReceipt(this.addReceiptForm.value).subscribe({
      next: () => {
        debugger
        this.addReceiptForm.reset();
        this.isVisible = false;
      },
      error: (error: HttpErrorResponse) => {
        this.addReceiptForm.setErrors(error.error.detailedMessage);
      }
    }));
  }

  submitForm(): void {
    Object.values(this.addReceiptForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
    this.isVisible = false;
  }

  public handleFileInput(files: any) {
    let component = this;
    const file = files.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      component.imageBaseData = reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    component.fileName = "Arquivo carregado!!";
  }

  private addImageToForm() {
    if (this.imageBaseData !== null) {
      this.addReceiptForm.controls.value.setValue(this.imageBaseData.toString());
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
