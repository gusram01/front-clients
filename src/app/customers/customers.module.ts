import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { CustomersComponent } from './customers.component';
import { NewComponent } from './new/new.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [CustomersComponent, NewComponent, FindComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CustomersModule {}
