import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';

import { AdminComponent } from './admin.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { VerticalnavComponent } from './verticalnav/verticalnav.component';
import { MynavComponent } from './mynav/mynav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    ToolbarComponent,
    ExpansionComponent,
    VerticalnavComponent,
    MynavComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
