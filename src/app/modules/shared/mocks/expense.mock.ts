import { IExpenseResponse } from "@interfaces/expense.interface";
import { ExpenseType } from "../enums/expense-type.enum";
import { PaymentStatus } from "../enums/payment-status.enum";
import { PaymentInstituitionMock } from "./payment-instituition.mock";
import { PaymentTypeDebitoMock } from "./payment-type.mock";

export const ExpenseMock: IExpenseResponse = {
    id: '88a063a6-8aa2-4cd8-bf79-4b00cedaaaae',
    name: 'Celular',
    purchaseDate: new Date('2021-12-10'),
    amount: '100.50',
    expenseType: ExpenseType.Eletrônicos,
    expensePaymentStatus: PaymentStatus.Awaiting,
    paymentInstituition: PaymentInstituitionMock,
    paymentType: PaymentTypeDebitoMock,
    paymentStatus: PaymentStatus.Paid
}
