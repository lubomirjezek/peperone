import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  headline = 'Rezervace';
  bg = 'url(../../../assets/img/bg-reservation.jpg)';

  reservation = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time_from: new FormControl('', Validators.required),
    time_to: new FormControl('', Validators.required),
    count: new FormControl('', Validators.required),
    note: new FormControl(''),
  });

  constructor(
    private reservationService: ReservationService
  ) { }

  ngOnInit() { }

  sendReservation(event, reservation: Reservation) {
    event.preventDefault();

    this.reservationService.send(reservation);
  }
}
