import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent, ToolbarComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule],
})
export class HomeModule {}
