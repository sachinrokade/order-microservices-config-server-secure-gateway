import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Payment {
  paymentId?: number;
  orderId: number;
  transactionId: number;
  paymentStatus: string;
  paymentMode: string;
  amount: number;
  referenceNumber?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = '/payment';

  constructor(private http: HttpClient) { }

  doPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${this.apiUrl}/doPayment`, payment);
  }

  getPaymentHistory(orderId: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${orderId}`);
  }
}
