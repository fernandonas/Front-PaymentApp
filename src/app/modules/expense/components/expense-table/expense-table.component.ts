import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ExpenseService } from '@services/expense.service';
import { IExpenseResponse } from '@interfaces/expense.interface';
import { PaymentStatus } from '@enums/payment-status.enum';
import { ExpenseTypeMapper } from '@maps/expense-type-mock.map';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.less']
})
export class ExpenseTableComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  expenses$: Observable<IExpenseResponse[]>;
  paymentStatusEnum = PaymentStatus;
  expenseType = ExpenseTypeMapper;

  constructor(
    private readonly expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  public getExpenses(): void {
    this.expenses$ = this.expenseService.getExpenses();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
