import { Component, EventEmitter, Input, Output } from '@angular/core';

import { map } from 'rxjs/operators';

import { NzModalService } from 'ng-zorro-antd/modal';

import { IExpenseResponse } from '@interfaces/expense.interface';
import { ExpenseService } from '@services/expense.service';

@Component({
  selector: 'app-delete-expense',
  templateUrl: './delete-expense.component.html',
  styleUrls: ['./delete-expense.component.less']
})
export class DeleteExpenseComponent {
  @Input() expense: IExpenseResponse;
  @Output() response: EventEmitter<any> = new EventEmitter<any>();

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
    this.expenseService.deleteExpense(this.expense).pipe(
      map(() => {
        this.response.next()
      })
    ).subscribe();
  }
}
