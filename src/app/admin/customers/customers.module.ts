import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { CustomersComponent } from './customers.component';
import { NewComponent } from './components/new/new.component';
import { FindComponent } from './components/find/find.component';

@NgModule({
  declarations: [CustomersComponent, NewComponent, FindComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CustomersModule {}
