import { IPaymentInstituitionResponse } from "@interfaces/payment-instituition.interface";
import { IPaymentTypeResponse } from "@interfaces/payment-type.interface";
import { ExpenseType } from "../shared/enums/expense-type.enum";
import { PaymentStatus } from "../shared/enums/payment-status.enum";

export class Expense {
    id: string;
    name: string;
    purchaseDate: Date;
    amount: string;
    expenseType: ExpenseType;
    paymentInstituitionId: string;
    paymentInstituition: IPaymentInstituitionResponse;
    paymentTypeId: string;
    paymentType: IPaymentTypeResponse;
    paymentStatus: PaymentStatus;
    paymentDate: Date;
    dueDate: Date;

    constructor(
        name: string,
        purchaseDate: Date,
        amount: string,
        expenseType: ExpenseType,
        paymentInstituitionId: string,
        paymentTypeId: string,
        paymentStatus: PaymentStatus,
        paymentDate: Date,
        dueDate: Date
    ) {
        this.name = name;
        this.purchaseDate = purchaseDate;
        this.amount = amount;
        this.expenseType = expenseType;
        this.paymentInstituitionId = paymentInstituitionId;
        this.paymentTypeId = paymentTypeId;
        this.paymentStatus = paymentStatus;
        this.paymentDate = paymentDate;
        this.dueDate = dueDate
    }

    public pay(): void {
        this.paymentStatus = PaymentStatus.Pago;
    }
}
