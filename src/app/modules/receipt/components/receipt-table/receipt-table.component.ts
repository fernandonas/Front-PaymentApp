import { Component, OnInit } from '@angular/core';
import { IReceipt } from '@interfaces/receipt.interface';
import { receiptMock } from '@mocks/receipt.mock';
import { ReceiptService } from '@services/receipt.service';
import { Observable, of } from 'rxjs';
import { ExpenseTypeMapper } from 'src/app/modules/shared/maps/expense-type-mock.map';

@Component({
  selector: 'app-receipt-table',
  templateUrl: './receipt-table.component.html',
  styleUrls: ['./receipt-table.component.less']
})
export class ReceiptTableComponent implements OnInit {
  receipt$: Observable<IReceipt[]>;
  expenseType = ExpenseTypeMapper;

  constructor(
    private readonly receiptService: ReceiptService
  ) { }

  ngOnInit(): void {
    this.getReceipts();
  }

  public addReceipt(): void {
    this.receipt$ = of([receiptMock, receiptMock]);
  }

  public getReceipts(): void {
    this.receipt$ = this.receiptService.getReceipts();
  }
}
