import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';
import { AdminGuard } from '../core/services/admin.guard';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Cars' },
    canActivate: [AdminGuard],
    component: CarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
