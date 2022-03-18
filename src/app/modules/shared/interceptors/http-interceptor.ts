import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

    constructor(
        private readonly messageService: NzMessageService
    ) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                timeout(30000),
                catchError((error: HttpErrorResponse) => {
                    this.messageService.error(error.error.detailedMessage)
                    return throwError(error);
                })
            );
    }
}
