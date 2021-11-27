import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTypeRoutingModule } from './payment-type-routing.module';
import { PaymentTypeComponent } from './payment-type.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentTypeTableComponent } from './components/payment-type-table/payment-type-table.component';
import { AddPaymentTypeModalComponent } from './components/add-payment-type-modal/add-payment-type-modal.component';
import { UpdatePaymentTypeComponent } from './components/update-payment-type/update-payment-type.component';


@NgModule({
  declarations: [PaymentTypeComponent, PaymentTypeTableComponent, AddPaymentTypeModalComponent, UpdatePaymentTypeComponent],
  imports: [
    CommonModule,
    PaymentTypeRoutingModule,
    SharedModule
  ]
})
export class PaymentTypeModule { }
