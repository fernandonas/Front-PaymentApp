import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './page/expense.component';
import { SharedModule } from '../shared/shared.module';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';


@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseTableComponent,
    AddExpenseComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    SharedModule
  ]
})
export class ExpenseModule { }
