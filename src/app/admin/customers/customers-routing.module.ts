import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { AdminGuard } from '../../core/guards/admin.guard';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Customers' },
    canActivate: [AdminGuard],
    component: CustomersComponent,
  },
  {
    path: 'new',
    data: { title: 'New Client' },
    canActivate: [AdminGuard],
    component: NewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
