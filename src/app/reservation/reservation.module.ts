import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { ReservationRoutingModule } from './reservation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReservationRoutingModule
  ],
  declarations: [RootComponent]
})
export class ReservationModule { }
