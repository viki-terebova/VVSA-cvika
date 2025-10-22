import { Component, OnInit, AfterViewInit, ViewChild, inject } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TransactionsService, ITransaction } from '../../api/transactions.service';
import { TransactionTypePipe } from '../../utils/pipes/transaction-type.pipe';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-basic-accounts-list',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    DecimalPipe,
    TransactionTypePipe,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './basic-accounts-list.html',
  styleUrl: './basic-accounts-list.css'
})
export class BasicAccountsList implements OnInit, AfterViewInit {
  private transactionsService = inject(TransactionsService);
  transactions$ = this.transactionsService.getTransactions$();

  displayedColumns: string[] = [
    'transactionId',
    'fullName',
    'transactionType',
    'accountNumber',
    'bankCode',
    'issueDate',
    'amount',
    'actions'
  ];
  dataSource = new MatTableDataSource<ITransaction>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.transactions$.subscribe((res) => {
      this.dataSource.data = res.data;
      if (this.sort) this.dataSource.sort = this.sort;
      if (this.paginator) this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data, filter) =>
        JSON.stringify(data).toLowerCase().includes(filter.trim().toLowerCase());
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
