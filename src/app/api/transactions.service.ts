import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITransaction {
  transactionId: number;
  fullName?: string;
  transactionType: number;
  accountNumber?: string;
  bankCode: string;
  issueDate: string; // ISO
  amount: number;
}

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  private http = inject(HttpClient);

  getTransactions$(): Observable<{ data: ITransaction[] }> {
    return this.http.get<{ data: ITransaction[] }>(`/api/transactions`);
  }

  getTransactionDetail$(id: string): Observable<{ data: ITransaction }> {
    return this.http.get<{ data: ITransaction }>(`/api/transactions/${id}`);
  }
}
