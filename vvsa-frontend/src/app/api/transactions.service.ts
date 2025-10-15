import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITransaction {
  transactionId: string;
  fullName: string;
  transactionType: number; // 0, 1, ... per assignment mapping
  accountNumber: string;
  bankCode: string;
  issueDate: string; // ISO date string
  amount: number;
}

export interface ApiListResponse<T> { data: T[]; }
export interface ApiItemResponse<T> { data: T; }

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  private http = inject(HttpClient);

  getTransactions$(): Observable<ApiListResponse<ITransaction>> {
    return this.http.get<ApiListResponse<ITransaction>>('/api/transactions');
  }

  getTransactionDetail$(id: string): Observable<ApiItemResponse<ITransaction>> {
    return this.http.get<ApiItemResponse<ITransaction>>(`/api/transactions/${id}`);
  }
}

