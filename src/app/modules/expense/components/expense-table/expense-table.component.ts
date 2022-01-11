import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IModal } from 'src/app/modules/shared/components/modal/modal.component';
import { ExpenseService } from 'src/app/modules/shared/services/expense.service';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.less']
})
export class ExpenseTableComponent implements OnInit,OnDestroy {

  subscription: Subscription = new Subscription();
  //TODO
  expenses = [];
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
  getExpenses(): void {
    this.subscription.add(this.expenseService.getExpenses().subscribe(
      response => {
        this.expenses = response;
      }
    ));
  }

  addExpense(): void {
    //Todo Adicionar método de adição de despesa.
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
