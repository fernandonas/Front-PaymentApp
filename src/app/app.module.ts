import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';

import { ErrorHandlerInterceptor } from './modules/shared/interceptors/http-interceptor';
import { LayoutModule } from './modules/layout/layout.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
