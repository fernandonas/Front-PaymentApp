import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentTypeRoutingModule } from './payment-type-routing.module';
import { PaymentTypeComponent } from './payment-type.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PaymentTypeComponent],
  imports: [
    CommonModule,
    PaymentTypeRoutingModule,
    SharedModule
  ]
})
export class PaymentTypeModule { }
