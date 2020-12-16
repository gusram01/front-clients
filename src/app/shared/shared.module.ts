import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { ErrorsPipe } from './pipes/errors.pipe';

import { TableComponent } from './table/table.component';
import { BtnThemeComponent } from './btn-theme/btn-theme.component';

@NgModule({
  declarations: [TableComponent, ErrorsPipe, BtnThemeComponent],
  exports: [TableComponent, ErrorsPipe, BtnThemeComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
