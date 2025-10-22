import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transactionType', standalone: true })
export class TransactionTypePipe implements PipeTransform {
  transform(value: unknown): string {
    switch (value) {
      case 0:
        return 'DEBIT transaction';
      case 1:
        return 'ATM withdrawal';
      default:
        return '';
    }
  }
}

