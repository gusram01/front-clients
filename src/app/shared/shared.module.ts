import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [ToolbarComponent, SignupFormComponent],
  exports: [SignupFormComponent, ToolbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
