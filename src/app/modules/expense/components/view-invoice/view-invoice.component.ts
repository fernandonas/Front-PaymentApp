import { Component, Input } from '@angular/core';
import { IExpenseResponse } from '@interfaces/expense.interface';
import { ExpenseService } from '@services/expense.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.less']
})
export class ViewInvoiceComponent {
  @Input() expense: IExpenseResponse;
  isVisible = false;
  expense$: Observable<IExpenseResponse>;

  constructor(
    private readonly expenseService: ExpenseService
  ) { }

  showModal(): void {
    this.getExpense();
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  getExpense(): void {
    this.expense$ = this.expenseService.getExpense(this.expense);
  }
}
