import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McRAIButtonModule, McRAIInputModule, McRAIModalModule, McRAIToasterModule } from 'ui';

import { RootComponent } from './components/root/root.component';
import { ReservationRoutingModule } from './reservation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from './services/reservation.service';
import { ReservationSuccessModalComponent } from './components/reservation-success-modal/reservation-success-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ReservationRoutingModule,
    McRAIInputModule,
    McRAIButtonModule,
    McRAIToasterModule,
    McRAIModalModule
  ],
  declarations: [
    RootComponent,
    ReservationSuccessModalComponent
  ],
  entryComponents: [
    ReservationSuccessModalComponent
  ],
  providers: [
    ReservationService
  ]
})
export class ReservationModule { }
