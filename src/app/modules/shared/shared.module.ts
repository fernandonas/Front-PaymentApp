import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { StepsComponent } from './components/steps/steps.component';
import { ModalComponent } from './components/modal/modal.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';


@NgModule({
  declarations: [
    NavbarComponent,
    StepsComponent,
    ModalComponent
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
    NzStepsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NzIconModule,
    NavbarComponent,
    NzGridModule,
    NzMenuModule,
    RouterModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzSpinModule,
    StepsComponent,
    NzStepsModule,
    ModalComponent
  ]
})
export class SharedModule { }
