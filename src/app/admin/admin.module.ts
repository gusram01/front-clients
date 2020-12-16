import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { VerticalnavComponent } from './components/verticalnav/verticalnav.component';
import { MynavComponent } from './components/mynav/mynav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    ExpansionComponent,
    VerticalnavComponent,
    MynavComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, SharedModule],
})
export class AdminModule {}
