import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIButtonModule } from 'ui';

import { RootComponent } from './components/root/root.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    McRAIButtonModule
  ],
  declarations: [
    RootComponent
  ]
})
export class ContactModule { }
