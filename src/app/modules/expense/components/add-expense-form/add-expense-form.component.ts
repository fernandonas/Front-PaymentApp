import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
export class AddExpenseFormComponent implements OnInit {
  @Output() expenseReturn = new EventEmitter();

  paymentInstituitions: IPaymentInstituitionResponse[];
  paymentTypes: IPaymentTypeResponse[];
  expenseForm: FormGroup;
  expenseTypeEnum = ExpenseType;

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
      name: ["", Validators.required],
      purchaseDate: ["", Validators.required],
      amount: ["", Validators.required],
      expenseType: ["0", Validators.required],
      paymentInstituitionId: [null, Validators.nullValidator],
      paymentTypeId: [null, Validators.nullValidator],
      paymentDate: [null, Validators.nullValidator],
      paymentStatus: ["0", Validators.required],
      dueDate: [null, Validators.nullValidator]
    })
  }

  private getPaymentInstituition(): void {
    this.paymentInstituitionService.getPaymentInstituitions().subscribe({
      next: response => {
        this.paymentInstituitions = response;
      }
    })
  }

  private getPaymentTypes(): void {
    this.paymentTypeService.getPaymentTypes().subscribe({
      next: response => {
        this.paymentTypes = response;
      }
    })
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
      this.expenseForm.controls.dueDate.value
    )
    this.expenseService.addExpense(expense).subscribe(() => this.expenseReturn.next())

  }

  public submitForm(): void {
    this.addExpense();
  }
}
