import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaymentTypeRequest, IPaymentTypeResponse } from '../interfaces/payment-type.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  addPaymentType(paymentTypeRequest: IPaymentTypeRequest): Observable<any>{
    return this.httpClient.post<any>('https://localhost:5001/api/paymentType', paymentTypeRequest);
  }

  getPaymentTypes(): Observable<IPaymentTypeResponse[]>{
    return this.httpClient.get<IPaymentTypeResponse[]>('https://localhost:5001/api/paymentType')
  }

  deletePaymentType(paymentTypeResponse: IPaymentTypeResponse): Observable<any>{
    return this.httpClient.delete<any>('https://localhost:5001/api/paymentType', {
      params: {
        id: paymentTypeResponse.id
      }
    });
  }

  updatePaymentType(paymentTypeResponse: IPaymentTypeResponse): Observable<any>{
    return this.httpClient.put<any>('https://localhost:5001/api/paymentType', paymentTypeResponse);
  }
}
