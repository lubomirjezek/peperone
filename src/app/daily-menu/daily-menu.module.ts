import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyMenuRoutingModule } from './daily-menu-routing.module';
import { UIModule } from '@mcrai/ui';

import { RootComponent } from './components/root/root.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DailyMenuRoutingModule,
    SharedModule,
    UIModule
  ],
  declarations: [
    RootComponent
  ]
})
export class DailyMenuModule { }
