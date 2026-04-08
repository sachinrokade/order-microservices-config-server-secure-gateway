import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TransactionRequest {
  userId: number;
  amount: number;
  productDetails: string;
  accountNumber: string;
}

export interface TransactionResponse {
  transactionId: number;
  orderId: number;
  status: string;
  amount: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = '/order';

  constructor(private http: HttpClient) { }

  bookOrder(request: TransactionRequest): Observable<TransactionResponse> {
    return this.http.post<TransactionResponse>(`${this.apiUrl}/bookOrder`, request);
  }
}
