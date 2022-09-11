import { ExpenseType } from "@enums/expense-type.enum";

export interface IReceipt {
    uuid: string;
    name: string;
    value: string;
    paymentDate: Date;
    dueDate: Date;
    expenseType: ExpenseType;
}
