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
    if (this.addExpenseForm.valid) {
      //TODO Adicionar método para adicionar expense
      this.isVisible = false
      return
    }
    this.isVisible = true;
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public handleModalOpenStatus(): void {
    this.isVisible = !this.isVisible;
  }
}
