import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';

import { ExpenseService } from '@services/expense.service';
import { IModal } from '@interfaces/modal.interface';
import { IExpenseResponse } from '@interfaces/expense.interface';
import { ExpenseType } from '@enums/expense-type.enum';
import { PaymentStatus } from '@enums/payment-status.enum';
import { Expense } from '../../expense';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.less']
})
export class ExpenseTableComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  expenses$: Observable<IExpenseResponse[]>;
  paymentStatusEnum = PaymentStatus;
  expenseTypeEnum = ExpenseType;
  content: IModal = {
    content: "Texto",
    title: "Título"
  }

  constructor(
    private readonly expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  public getExpenses(): void {
    this.expenses$ = this.expenseService.getExpenses();
  }

  public deleteExpense(expense: IExpenseResponse): void {
    this.subscription.add(this.expenseService.deleteExpense(expense).subscribe(
      () => {
        this.getExpenses();
      }
    ));
  }

  public addExpensee(expenseForm: FormGroup): void {
    console.log("Resultado: expenseForm", expenseForm.controls.name.value);
    const expense = new Expense(
      expenseForm.controls.name.value,
      expenseForm.controls.purchaseDate.value,
      expenseForm.controls.amount.value,
      +expenseForm.controls.expenseType.value,
      expenseForm.controls.paymentInstituitionId.value,
      expenseForm.controls.paymentTypeId.value,
      +expenseForm.controls.paymentStatus.value,
      expenseForm.controls.paymentDate.value,
      expenseForm.controls.dueDate.value
    )
    console.log("Resultado: expense", expense);
    this.expenseService.addExpense(expense).subscribe(() => this.getExpenses())
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
