import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [CarsComponent, DetailsComponent],
  imports: [CommonModule, CarsRoutingModule, SharedModule, MaterialModule],
})
export class CarsModule {}
