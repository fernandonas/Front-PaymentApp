import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './page/expense.component';
import { SharedModule } from '../shared/shared.module';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddExpenseFormComponent } from './components/add-expense-form/add-expense-form.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';


@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseTableComponent,
    AddExpenseComponent,
    AddExpenseFormComponent,
    ViewInvoiceComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    SharedModule
  ]
})
export class ExpenseModule { }
