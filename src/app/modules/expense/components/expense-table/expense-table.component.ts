import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ExpenseService } from '@services/expense.service';
import { IExpenseResponse } from '@interfaces/expense.interface';
import { ExpenseType } from '@enums/expense-type.enum';
import { PaymentStatus } from '@enums/payment-status.enum';

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
