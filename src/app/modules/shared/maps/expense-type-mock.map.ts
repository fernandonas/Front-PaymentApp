import { ExpenseType } from "@enums/expense-type.enum";

export const ExpenseTypeMapper = new Map<ExpenseType, string>([
    [ExpenseType.Alimentação, 'Alimentação'],
    [ExpenseType.Moradia, 'Moradia'],
    [ExpenseType.Educação, 'Educação'],
    [ExpenseType.EletroDomesticos, 'EletroDomesticos'],
    [ExpenseType.Eletrônicos, 'Eletrônicos'],
    [ExpenseType.Lazer, 'Lazer'],
    [ExpenseType.Saúde, 'Saúde'],
    [ExpenseType.Investimento, 'Investimento']
]);
