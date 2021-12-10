import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpenseService } from 'src/app/modules/shared/services/expense.service';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.less']
})
export class ExpenseTableComponent implements OnInit {

  subscription: Subscription = new Subscription();
  //TODO
  expenses = [];

  constructor(
    private readonly expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
      this.getExpenses();
  }
  getExpenses(): void {
    this.subscription.add(this.expenseService.getExpenses().subscribe(
      response => {
        this.expenses = response;
      }
    ))
  }
}
