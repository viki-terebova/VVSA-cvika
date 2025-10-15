import { Component, computed } from '@angular/core';
import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TransactionsService, ITransaction } from '../api/transactions.service';
import { TransactionTypePipe } from '../utils/pipes/transaction-type.pipe';

@Component({
  standalone: true,
  selector: 'app-transactions-list',
  imports: [AsyncPipe, RouterLink, DatePipe, DecimalPipe, TransactionTypePipe],
  templateUrl: './transactions-list.component.html'
})
export class TransactionsListComponent {

  private svc = new TransactionsService(); // service is providedIn: 'root'
  // Signals variant:
  transactions = toSignal(
    this.svc.getTransactions$(),
    { initialValue: { data: [] as ITransaction[] } }
  );

  count = computed(() => this.transactions().data.length);
}
