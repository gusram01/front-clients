import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    data: { title: 'Main' },
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        data: { title: 'Main' },
        canLoad: [AdminGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'customers',
        data: { title: 'Customers' },
        canLoad: [AdminGuard],
        loadChildren: () =>
          import('./customers/customers.module').then((m) => m.CustomersModule),
      },
      {
        path: 'cars',
        data: { title: 'Cars' },
        canLoad: [AdminGuard],
        loadChildren: () =>
          import('./cars/cars.module').then((m) => m.CarsModule),
      },
      {
        path: 'operations',
        data: { title: 'Operations' },
        canLoad: [AdminGuard],
        loadChildren: () =>
          import('./operations/operations.module').then(
            (m) => m.OperationsModule
          ),
      },
      {
        path: 'actions',
        data: { title: 'Actions' },
        canLoad: [AdminGuard],
        loadChildren: () =>
          import('./actions/actions.module').then((m) => m.ActionsModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
