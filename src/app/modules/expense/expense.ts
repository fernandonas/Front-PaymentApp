import { ExpenseType } from "../shared/enums/expense-type.enum";
import { PaymentStatus } from "../shared/enums/payment-status.enum";
import { IInstallmentResponse } from "../shared/interfaces/installment.interface";

export class Expense {
    id: string;
    name: string;
    purchaseDate: Date;
    paymentDate: Date;
    amount: string;
    amountPaid: string;
    installments: IInstallmentResponse[];
    expensePaymentStatus: PaymentStatus;
    expenseType: ExpenseType;

    constructor(props: Omit<Expense, 'id'>) {
        Object.assign(this, props);
    }
}