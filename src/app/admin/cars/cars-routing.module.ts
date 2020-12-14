import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../../core/guards/admin.guard';
import { CarsComponent } from './cars.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Cars' },
    canActivate: [AdminGuard],
    component: CarsComponent,
  },
  {
    path: ':id',
    data: { title: 'Car Detail' },
    canActivate: [AdminGuard],
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
