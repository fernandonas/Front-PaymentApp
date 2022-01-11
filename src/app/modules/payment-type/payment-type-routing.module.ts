import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentTypeComponent } from './page/payment-type.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTypeRoutingModule { }
