import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExpenseResponse } from '../interfaces/expense.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getExpenses(): Observable<IExpenseResponse[]> {
    return this.http.get<IExpenseResponse[]>('https://localhost:5001/api/expense');
  }

  deleteExpense(expense: IExpenseResponse): Observable<IExpenseResponse[]> {
    return this.http.delete<IExpenseResponse[]>('https://localhost:5001/api/expense',{
      params: {
        id: expense.id
      }
    });
  }

}
