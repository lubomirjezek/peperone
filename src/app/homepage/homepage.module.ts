import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';

import { RootComponent } from './components/root/root.component';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  declarations: [
    RootComponent
  ]
})
export class HomepageModule { }
