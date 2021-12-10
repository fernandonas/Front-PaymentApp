import { ExpenseType } from "../enums/expense-type.enum";
import { PaymentStatus } from "../enums/payment-status.enum";
import { IExpenseResponse } from "../interfaces/expense.interface";
import { PaymentInstituitionMock } from "./payment-instituition.mock";
import { PaymentTypeDebitoMock } from "./payment-type.mock";

export const ExpenseMock: IExpenseResponse = {
    uuid: '88a063a6-8aa2-4cd8-bf79-4b00cedaaaae',
    name: 'Celular',
    purchaseDate: new Date('2021-12-10'),
    paymentDate: null,
    amount: '100',
    amountPaid: '90',
    expenseType: ExpenseType.Eletrônicos,
    expensePaymentStatus: PaymentStatus.Awaiting,
    installments: [{
        uuid: '88a063a6-8aa2-4cd8-bf79-4b00cedaaaao',
        installment: '1',
        dateDue: new Date('2022-01-10'),
        paymentDate: new Date('2021-12-10'),
        paymentInstituition: PaymentInstituitionMock,
        paymentType: PaymentTypeDebitoMock,
        paymentStatus: PaymentStatus.Paid,
        value: '90'
    },
    {
        uuid: '88a063a6-8aa2-4cd8-bf79-4b00cedaaaaU',
        installment: '2',
        dateDue: new Date('2022-02-10'),
        paymentDate: null,
        paymentInstituition: PaymentInstituitionMock,
        paymentType: PaymentTypeDebitoMock,
        paymentStatus: PaymentStatus.Awaiting,
        value: '10'
    }
    ]
}