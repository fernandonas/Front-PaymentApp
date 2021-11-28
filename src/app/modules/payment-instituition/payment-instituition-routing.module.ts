import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentInstituitionComponent } from './payment-instituition.component';

const routes: Routes = [{ path: '', component: PaymentInstituitionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentInstituitionRoutingModule { }
