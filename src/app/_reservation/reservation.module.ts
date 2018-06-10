import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIButtonModule, McRAIInputModule, McRAIToasterModule } from 'ui';

import { RootComponent } from './components/root/root.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from './services/reservation.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ReservationRoutingModule,
    McRAIInputModule,
    McRAIButtonModule,
    McRAIToasterModule
  ],
  declarations: [
    RootComponent
  ],
  providers: [
    ReservationService
  ]
})
export class ReservationModule { }
