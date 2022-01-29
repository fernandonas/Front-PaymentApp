import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Expense } from '../../expense/expense';
import { IExpenseResponse } from '../interfaces/expense.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  expenseApi = `${environment.baseUrl}/expense`;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getExpenses(): Observable<IExpenseResponse[]> {
    return this.httpClient.get<IExpenseResponse[]>(this.expenseApi);
  }

  getExpense(expense: IExpenseResponse): Observable<IExpenseResponse> {
    return this.httpClient.get<IExpenseResponse>(`${this.expenseApi}/${expense.id}`);
  }

  deleteExpense(expense: IExpenseResponse): Observable<IExpenseResponse[]> {
    return this.httpClient.delete<IExpenseResponse[]>(this.expenseApi, {
      params: {
        id: expense.id
      }
    });
  }

  addExpense(expense: Expense): Observable<any> {
    return this.httpClient.post<Observable<any>>(this.expenseApi, expense);
  }
}
