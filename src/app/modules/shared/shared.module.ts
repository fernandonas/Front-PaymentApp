import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    NzIconModule,
    CommonModule,
    NzGridModule,
    NzMenuModule,
    RouterModule
  ],
  exports: [
    NzIconModule,
    NavbarComponent,
    NzGridModule,
    NzMenuModule,
    RouterModule
  ]
})
export class SharedModule { }
