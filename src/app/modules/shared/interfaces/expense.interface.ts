import { ExpenseType } from "../enums/expense-type.enum";
import { PaymentStatus } from "../enums/payment-status.enum";
import { IInstallmentResponse } from "./installment.interface";

export interface IExpenseRequest {

}

export interface IExpenseResponse {
  id: string;
  name: string;
  purchaseDate: Date;
  paymentDate: Date;
  amount: string;
  amountPaid: string;
  installments: IInstallmentResponse[];
  expensePaymentStatus: PaymentStatus;
  expenseType: ExpenseType;
}
