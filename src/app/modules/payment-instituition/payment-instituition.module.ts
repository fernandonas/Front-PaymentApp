import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentInstituitionRoutingModule } from './payment-instituition-routing.module';
import { PaymentInstituitionTableComponent } from './components/payment-instituition-table/payment-instituition-table.component';
import { SharedModule } from '../shared/shared.module';
import { AddPaymentInstituitionComponent } from './components/add-payment-instituition/add-payment-instituition.component';
import { UpdatePaymentInstituitionComponent } from './components/update-payment-instituition/update-payment-instituition.component';
import { PaymentInstituitionComponent } from './page/payment-instituition.component';


@NgModule({
  declarations: [
    PaymentInstituitionComponent,
    PaymentInstituitionTableComponent,
    AddPaymentInstituitionComponent,
    UpdatePaymentInstituitionComponent
  ],
  imports: [
    CommonModule,
    PaymentInstituitionRoutingModule,
    SharedModule
  ]
})
export class PaymentInstituitionModule { }
