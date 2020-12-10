import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CarsComponent],
  imports: [CommonModule, CarsRoutingModule, SharedModule, MaterialModule],
})
export class CarsModule {}
