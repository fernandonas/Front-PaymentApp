import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { IPaymentInstituitionResponse } from '@interfaces/payment-instituition.interface';
import { IPaymentTypeResponse } from '@interfaces/payment-type.interface';
import { PaymentInstituitionService } from '@services/payment-instituition.service';
import { PaymentTypeService } from '@services/payment-type.service';
import { ExpenseType } from '@enums/expense-type.enum';
import { Expense } from '../../expense';
import { ExpenseService } from '@services/expense.service';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.less']
})
export class AddExpenseFormComponent implements OnInit, OnDestroy {
  @Output() expenseReturn = new EventEmitter();

  paymentInstituitions$: Observable<IPaymentInstituitionResponse[]>;
  paymentTypes$: Observable<IPaymentTypeResponse[]>;
  expenseForm: FormGroup;
  expenseTypeEnum = ExpenseType;
  imageBaseData: string | ArrayBuffer = null;
  fileName = "Nenhum arquivo selecionado.";
  subscription = new Subscription();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly paymentInstituitionService: PaymentInstituitionService,
    private readonly paymentTypeService: PaymentTypeService,
    private readonly expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
    this.initiateForm();
    this.getPaymentInstituition();
    this.getPaymentTypes();
  }

  private initiateForm(): void {
    this.expenseForm = this.formBuilder.group({
      name: [null, Validators.required],
      purchaseDate: [new Date(), Validators.required],
      amount: [null, Validators.required],
      expenseType: ["0", Validators.required],
      paymentInstituitionId: [null, Validators.nullValidator],
      paymentTypeId: [null, Validators.nullValidator],
      paymentDate: [null, Validators.nullValidator],
      paymentStatus: ["0", Validators.required],
      dueDate: [null, Validators.nullValidator],
      invoice: [null, Validators.nullValidator]
    });
  }

  private getPaymentInstituition(): void {
    this.paymentInstituitions$ = this.paymentInstituitionService.getPaymentInstituitions();
  }

  private getPaymentTypes(): void {
    this.paymentTypes$ = this.paymentTypeService.getPaymentTypes();
  }

  public addExpense(): void {
    const expense = new Expense(
      this.expenseForm.controls.name.value,
      this.expenseForm.controls.purchaseDate.value,
      this.expenseForm.controls.amount.value,
      +this.expenseForm.controls.expenseType.value,
      this.expenseForm.controls.paymentInstituitionId.value,
      this.expenseForm.controls.paymentTypeId.value,
      +this.expenseForm.controls.paymentStatus.value,
      this.expenseForm.controls.paymentDate.value,
      this.expenseForm.controls.dueDate.value,
      this.expenseForm.controls.invoice.value
    );
    this.subscription.add(this.expenseService.addExpense(expense).subscribe(() => this.expenseReturn.next()));
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
      this.expenseForm.controls.invoice.setValue(this.imageBaseData.toString());
    }
  }

  public submitForm(): void {
    this.addImageToForm();
    if (this.expenseForm.valid) {
      this.addExpense();
    } else {
      Object.values(this.expenseForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
