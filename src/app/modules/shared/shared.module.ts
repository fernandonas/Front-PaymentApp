import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    NavbarComponent
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
    NzInputModule

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
    NzInputModule
  ]
})
export class SharedModule { }
