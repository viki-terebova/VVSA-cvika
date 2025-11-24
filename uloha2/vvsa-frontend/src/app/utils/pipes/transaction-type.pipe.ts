import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transactionType', standalone: true })
export class TransactionTypePipe implements PipeTransform {
  transform(value: unknown): string {
    switch (value) {
      case 0:
        return 'DEBIT transaction';
      case 1:
        return 'Incoming';
      case 2:
        return 'Outgoing';
      case 3:
        return 'Withdrawal';
      default:
        return 'Unknown';
    }
  }
}

