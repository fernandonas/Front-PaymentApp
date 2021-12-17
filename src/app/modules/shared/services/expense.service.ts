import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExpenseResponse } from '../interfaces/expense.interface';
import { ExpenseMock } from '../mocks/expense.mock';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getExpenses(): Observable<IExpenseResponse[]> {
    // return this.http.get<IExpenseResponse[]>('link');
    return new Observable<IExpenseResponse[]>(obsevable => {
      obsevable.next(
        [ExpenseMock, ExpenseMock]
      )
    })
  }
}
