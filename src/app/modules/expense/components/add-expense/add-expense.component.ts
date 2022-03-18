import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LoaderHelper } from '@helpers/loader.helper';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.less']
})
export class AddExpenseComponent {
  @Output() response = new EventEmitter();

  loading = new LoaderHelper();
  isVisible = false;
  addExpenseForm: FormGroup;

  public handleOk(): void {
    this.isVisible = false;
    this.response.emit();
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public handleModalOpenStatus(): void {
    this.isVisible = !this.isVisible;
  }
}
