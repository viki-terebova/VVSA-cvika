import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./transactions/transactions-list.component').then(m => m.TransactionsListComponent)
  },
  {
    path: 'transactions/:id',
    loadComponent: () =>
      import('./transactions/transactions-detail.component').then(m => m.TransactionsDetailComponent)
  },
  { path: '**', redirectTo: '' }
];
