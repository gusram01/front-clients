import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionsRoutingModule } from './actions-routing.module';
import { MaterialModule } from '../material/material.module';

import { ActionsComponent } from './actions.component';

@NgModule({
  declarations: [ActionsComponent],
  imports: [CommonModule, ActionsRoutingModule, MaterialModule],
})
export class ActionsModule {}
