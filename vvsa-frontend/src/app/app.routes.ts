import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
        import('./dashboard/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
        import('./dashboard/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'basic-accounts',
        loadComponent: () =>
        import('./basic-accounts/basic-accounts-list/basic-accounts-list').then(m => m.BasicAccountsList)
    },
    {
        path: 'basic-accounts/detail/:id',
        loadComponent: () =>
        import('./basic-accounts/basic-account-detail/basic-account-detail').then(m => m.BasicAccountDetail)
    },
    {
        path: '**',
        loadComponent: () =>
        import('./dashboard/dashboard/dashboard').then(m => m.Dashboard)
    }
];
