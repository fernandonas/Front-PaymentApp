import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';
import { SharedModule } from '../shared/shared.module';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';


@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseTableComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    SharedModule
  ]
})
export class ExpenseModule { }