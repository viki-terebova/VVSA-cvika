import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TransactionsService, ITransaction } from '../../api/transactions.service';
import { TransactionTypePipe } from '../../utils/pipes/transaction-type.pipe';

@Component({
  selector: 'app-basic-accounts-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink, DatePipe, DecimalPipe, TransactionTypePipe],
  templateUrl: './basic-accounts-list.html',
  styleUrl: './basic-accounts-list.css'
})
export class BasicAccountsList {
  private transactionsService = inject(TransactionsService);
  transactions$ = this.transactionsService.getTransactions$();
}
