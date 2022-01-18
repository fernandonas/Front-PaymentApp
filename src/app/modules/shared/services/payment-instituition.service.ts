import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaymentInstituitionRequest, IPaymentInstituitionResponse } from '../interfaces/payment-instituition.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentInstituitionService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getPaymentInstituitions(): Observable<IPaymentInstituitionResponse[]> {
    return this.httpClient.get<IPaymentInstituitionResponse[]>('https://localhost:5001/api/paymentInstituition')
  }

  addPaymentInstituition(paymentTypeRequest: IPaymentInstituitionRequest): Observable<any> {
    return this.httpClient.post<any>('https://localhost:5001/api/paymentInstituition', paymentTypeRequest);
  }

  deletePaymentInstituition(paymentInstituitionResponse: IPaymentInstituitionResponse): Observable<any> {
    return this.httpClient.delete<any>('https://localhost:5001/api/paymentInstituition', {
      params: {
        id: paymentInstituitionResponse.id
      }
    });
  }

  updatePaymentInstituition(paymentInstituitionResponse: IPaymentInstituitionResponse): Observable<any> {
    return this.httpClient.put<any>(`https://localhost:5001/api/paymentInstituition/${paymentInstituitionResponse.id}`, paymentInstituitionResponse);
  }
}
