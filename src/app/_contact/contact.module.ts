import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UIModule } from '@mcrai/ui';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    UIModule
  ],
  declarations: [
    RootComponent
  ]
})
export class ContactModule { }
