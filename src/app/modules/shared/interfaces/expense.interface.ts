import { ExpenseType } from "../enums/expense-type.enum";
import { PaymentStatus } from "../enums/payment-status.enum";
import { IInstallmentResponse } from "./installment.interface";

export interface IExpenseRequest {

}

export interface IExpenseResponse {
  name: string,
  dataLancamento: Date,
  dataPagamento: Date,
  valorTotal: string,
  valorPago: string,
  parcelas: IInstallmentResponse,
  expensePaymentStatus: PaymentStatus,
  tipoDeDespesa: ExpenseType
}
