import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
import { ErrorsPipe } from './pipes/errors.pipe';

import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent, ErrorsPipe],
  exports: [TableComponent, ErrorsPipe],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
