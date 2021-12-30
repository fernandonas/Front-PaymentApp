import { Component } from '@angular/core';
import { ExpenseType } from 'src/app/modules/shared/enums/expense-type.enum';
import { PaymentStatus } from 'src/app/modules/shared/enums/payment-status.enum';
import { Expense } from '../../expense';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.less']
})
export class AddExpenseComponent {

  expense: Expense;

  test: Expense = {
    id: "1afb8ae5-8923-4204-af73-cd7ef9a90f91",
    name: "Nome",
    purchaseDate: new Date('2021-12-17'),
    paymentDate: null,
    amount: "10",
    amountPaid: "0",
    installments: null,
    expensePaymentStatus: PaymentStatus.Awaiting,
    expenseType: ExpenseType.Alimentação,
  }

  constructor() {
    this.expense = new Expense(this.test);
  }
}
