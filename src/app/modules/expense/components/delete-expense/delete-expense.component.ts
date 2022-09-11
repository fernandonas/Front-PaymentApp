import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';

import { IExpenseResponse } from '@interfaces/expense.interface';
import { ExpenseService } from '@services/expense.service';

@Component({
  selector: 'app-delete-expense',
  templateUrl: './delete-expense.component.html',
  styleUrls: ['./delete-expense.component.less']
})
export class DeleteExpenseComponent implements OnDestroy {
  @Input() expense: IExpenseResponse;
  @Output() response: EventEmitter<any> = new EventEmitter<any>();
  subscription = new Subscription();

  constructor(
    private readonly modal: NzModalService,
    private readonly expenseService: ExpenseService
  ) { }

  public showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: `Tem certeza que deseja deletar ${this.expense.name}?`,
      nzContent: '',
      nzOkText: 'Sim',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteExpense(),
      nzCancelText: 'Não',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  private deleteExpense(): void {
    this.subscription.add(this.expenseService.deleteExpense(this.expense).pipe(
      map(() => {
        this.response.next()
      })
    ).subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
