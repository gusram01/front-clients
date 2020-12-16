import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarsRoutingModule } from './cars-routing.module';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { CarsComponent } from './cars.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [CarsComponent, DetailsComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CarsModule {}
