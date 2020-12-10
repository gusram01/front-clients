import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [ToolbarComponent, SignupFormComponent, TableComponent],
  exports: [SignupFormComponent, ToolbarComponent, TableComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
  ],
})
export class SharedModule {}
