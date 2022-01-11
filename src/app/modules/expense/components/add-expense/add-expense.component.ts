import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.less']
})

export class AddExpenseComponent {
  @Output() response = new EventEmitter();
  isVisible = false;
  addExpenseForm: FormGroup;

  handleOk(): void {
    if (this.addExpenseForm.valid) {
      //TODO Adicionar método para adicionar expense
    } else {
      this.isVisible = true;
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleModalOpenStatus(): void {
    this.isVisible = !this.isVisible;
  }
}
