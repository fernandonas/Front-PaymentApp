import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'payment-type', loadChildren: () => import('./modules/payment-type/payment-type.module').then(m => m.PaymentTypeModule) }, { path: 'payment-instituition', loadChildren: () => import('./modules/payment-instituition/payment-instituition.module').then(m => m.PaymentInstituitionModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
