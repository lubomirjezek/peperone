import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyMenuRoutingModule } from './daily-menu-routing.module';
import { UIModule } from '@mcrai/ui';

import { DailyMenuService } from './services/daily-menu.service';

import { RootComponent } from './components/root/root.component';
import { SharedModule } from '../shared/shared.module';
import { DailyMenuListComponent } from './components/daily-menu-list/daily-menu-list.component';

@NgModule({
  imports: [
    CommonModule,
    DailyMenuRoutingModule,
    SharedModule,
    UIModule
  ],
  declarations: [
    RootComponent,
    DailyMenuListComponent
  ],
  providers: [
    DailyMenuService
  ]
})
export class DailyMenuModule { }
