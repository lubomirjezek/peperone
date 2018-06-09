import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyMenuRoutingModule } from './daily-menu-routing.module';

import { RootComponent } from './components/root/root.component';
import { SharedModule } from '../shared/shared.module';
import { DailyMenuListComponent } from './components/daily-menu-list/daily-menu-list.component';

@NgModule({
  imports: [
    CommonModule,
    DailyMenuRoutingModule,
    SharedModule
  ],
  declarations: [
    RootComponent,
    DailyMenuListComponent
  ]
})
export class DailyMenuModule { }
