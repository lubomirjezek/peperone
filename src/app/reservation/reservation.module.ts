import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UIModule } from '@mcrai/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReservationRoutingModule,
    UIModule
  ],
  declarations: [RootComponent]
})
export class ReservationModule { }
