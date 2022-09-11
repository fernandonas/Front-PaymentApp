import { ExpenseType } from "@enums/expense-type.enum";
import { IReceipt } from "@interfaces/receipt.interface";

export const receiptMock: IReceipt = {
    uuid: '18e08808-2ec7-4461-8e0d-7d8ca7f3df33',
    name: 'Telefone',
    value: '',
    paymentDate: new Date('09/03/2022'),
    dueDate: new Date('09/03/2022'),
    expenseType: ExpenseType.Moradia
};
