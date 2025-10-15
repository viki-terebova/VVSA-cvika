import { Component, inject } from '@angular/core';
import { BasicDetail } from '../basic-detail/basic-detail';
import { WithdrawalDetail } from '../withdrawal-detail/withdrawal-detail';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { TransactionsService } from '../../api/transactions.service';
import { TransactionTypePipe } from '../../utils/pipes/transaction-type.pipe';


@Component({
  selector: 'app-basic-account-detail',
  standalone: true,
  imports: [BasicDetail, WithdrawalDetail, RouterLink, AsyncPipe, DatePipe, DecimalPipe, TransactionTypePipe],
  templateUrl: './basic-account-detail.html',
  styleUrl: './basic-account-detail.css'
})
export class BasicAccountDetail {
  private route = inject(ActivatedRoute);
  private svc = inject(TransactionsService);

  id: string | null = this.route.snapshot.paramMap.get('id');

  tx$ = this.route.paramMap.pipe(
    switchMap(params => this.svc.getTransactionDetail$(params.get('id')!))
  );
}
