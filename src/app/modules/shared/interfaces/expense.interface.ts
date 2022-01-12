import { ExpenseType } from "../enums/expense-type.enum";
import { PaymentStatus } from "../enums/payment-status.enum";
import { IPaymentInstituitionResponse } from "./payment-instituition.interface";
import { IPaymentTypeResponse } from "./payment-type.interface";

export interface IExpenseRequest {
  name: string;
  purchaseDate: Date;
  amount: string;
  expensePaymentStatus: PaymentStatus;
  expenseType: ExpenseType;
  paymentInstituitionId: string;
  paymentTypeId: string;
  paymentStatus: PaymentStatus
}

export interface IExpenseResponse {
  id: string;
  name: string;
  purchaseDate: Date;
  amount: string;
  expensePaymentStatus: PaymentStatus;
  expenseType: ExpenseType;
  paymentInstituition: IPaymentInstituitionResponse;
  paymentType: IPaymentTypeResponse;
  paymentStatus: PaymentStatus;
}
