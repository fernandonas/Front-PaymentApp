import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { AddExpenseComponent } from './add-expense.component';

fdescribe('AddExpenseComponent', () => {
  let component: AddExpenseComponent;
  let fixture: ComponentFixture<AddExpenseComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddExpenseComponent
      ],
      imports: [
        NzModalModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseComponent);
    component = fixture.componentInstance;
    component.addExpenseForm = formBuilder.group({
      name: ["", Validators.required],
      purchaseDate: ["", Validators.required],
      amount: ["", Validators.required],
      expenseType: ["0", Validators.required],
      paymentInstituitionId: [null],
      paymentTypeId: [null],
      paymentDate: [null],
      paymentStatus: ["0"],
      dueDate: [null]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isVisible true is form válid.', () => {
    component.addExpenseForm.patchValue(
      {
        name: "Expense Name",
        purchaseDate: "2022-01-01",
        amount: "100.00",
        expenseType: "0",
        paymentInstituitionId: null,
        paymentTypeId: null,
        paymentDate: null,
        paymentStatus: "0",
        dueDate: null
      }
    )
    component.handleOk();
    expect(component.isVisible).toBeFalse();
  });

  it('should set isVisible false if form inválid.', () => {
    component.addExpenseForm.patchValue(
      {
        name: "",
        purchaseDate: "gg",
        amount: "100",
        expenseType: "0",
        paymentInstituitionId: null,
        paymentTypeId: "f39ace44-3cb9-4961-b960-e72feb1030e4",
        paymentDate: "2021-01-01",
        paymentStatus: "0",
        dueDate: null
      }
    )
    component.handleOk();
    expect(component.isVisible).toBeTrue();
  });

  it('should set isVisible false is call handleCancel', () => {
    component.handleCancel();
    expect(component.isVisible).toBeFalse();
  });

  it('should change isVisible true to false if call handleModalOpenStatus', () => {
    component.isVisible = true;
    component.handleModalOpenStatus();
    expect(component.isVisible).toBeFalse();
  });

  it('should change isVisible false to true if call handleModalOpenStatus', () => {
    component.isVisible = false;
    component.handleModalOpenStatus();
    expect(component.isVisible).toBeTrue();
  });
});
