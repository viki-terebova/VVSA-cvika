import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, DecimalPipe, NgIf } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { TransactionsService } from '../api/transactions.service';
import { inject } from '@angular/core';
import { TransactionTypePipe } from '../utils/pipes/transaction-type.pipe';

@Component({
  standalone: true,
  selector: 'app-transactions-detail',
  imports: [AsyncPipe, DatePipe, DecimalPipe, NgIf, RouterLink, TransactionTypePipe],
  templateUrl: './transactions-detail.component.html'
})
export class TransactionsDetailComponent {
  private route = inject(ActivatedRoute);
  private svc = inject(TransactionsService);

  tx$ = this.route.paramMap.pipe(
    switchMap(params => this.svc.getTransactionDetail$(params.get('id')!))
  );
}
