import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardRoutingModule } from './menu-card-routing.module';

import { RootComponent } from './components/root/root.component';

@NgModule({
  imports: [
    CommonModule,
    MenuCardRoutingModule
  ],
  declarations: [
    RootComponent
  ]
})
export class MenuCardModule { }
