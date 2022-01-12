import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpenseService } from '@services/expense.service';
import { IModal } from '@interfaces/modal.interface';
import { IExpenseResponse } from '@interfaces/expense.interface';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.less']
})

export class ExpenseTableComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  expenses: IExpenseResponse[] = [];
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
    this.subscription.add(this.expenseService.getExpenses().subscribe(
      response => {
        this.expenses = response;
      }
    ));
  }

  public addExpense(): void {
    //Todo Adicionar método de adição de despesa.
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
