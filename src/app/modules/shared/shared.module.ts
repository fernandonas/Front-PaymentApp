import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { StepsComponent } from './components/steps/steps.component';
import { ModalComponent } from './components/modal/modal.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SafePipeUrl } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    StepsComponent,
    ModalComponent,
    SafePipeUrl
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NzIconModule,
    CommonModule,
    NzGridModule,
    NzMenuModule,
    RouterModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzStepsModule,
    NzSelectModule,
    NzDatePickerModule,
    NzMessageModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NzIconModule,
    NzGridModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzSpinModule,
    NzStepsModule,
    NzSelectModule,
    NzDatePickerModule,
    NzMessageModule,
    StepsComponent,
    ModalComponent,
    NavbarComponent,
    NzFormModule,
    SafePipeUrl
  ]
})
export class SharedModule { }
