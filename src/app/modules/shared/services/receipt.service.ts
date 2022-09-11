import { Injectable } from '@angular/core';
import { IReceipt } from '@interfaces/receipt.interface';
import { receiptMock } from '@mocks/receipt.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  public addReceipt(receipt: IReceipt): Observable<IReceipt> {
    return of(receipt);
  }

  public getReceipts(): Observable<IReceipt[]> {
    return of([receiptMock, receiptMock]);
  }
}
