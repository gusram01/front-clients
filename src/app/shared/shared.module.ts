import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [ToolbarComponent, SignupFormComponent],
  exports: [SignupFormComponent, ToolbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
  ],
})
export class SharedModule {}
