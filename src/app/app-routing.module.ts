import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './modules/layout/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'payment-type',
        loadChildren: () => import('./modules/payment-type/payment-type.module')
          .then(m => m.PaymentTypeModule)
      },
      {
        path: 'payment-instituition',
        loadChildren: () => import('./modules/payment-instituition/payment-instituition.module')
          .then(m => m.PaymentInstituitionModule)
      },
      {
        path: 'expense',
        loadChildren: () => import('./modules/expense/expense.module')
          .then(m => m.ExpenseModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module')
          .then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
