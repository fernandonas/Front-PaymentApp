import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptRoutingModule } from './receipt-routing.module';
import { ReceiptComponent } from './page/receipt.component';
import { ReceiptTableComponent } from './components/receipt-table/receipt-table.component';
import { SharedModule } from '../shared/shared.module';
import { AddReceiptComponent } from './components/add-receipt/add-receipt.component';


@NgModule({
  declarations: [ReceiptComponent, ReceiptTableComponent, AddReceiptComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReceiptRoutingModule
  ]
})
export class ReceiptModule { }
