import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

import { ReservationService } from '../../services/reservation.service';
import { McRAIModal, McRAIModalOptions, McRAIToaster, ToastType } from 'ui';
import { ReservationSuccessModalComponent } from '../reservation-success-modal/reservation-success-modal.component';

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
    private reservationService: ReservationService,
    private toasterService: McRAIToaster,
    private modalService: McRAIModal
  ) { }

  ngOnInit() { }

  private _success() {
    this.modalService.open(ReservationSuccessModalComponent, new McRAIModalOptions('600px', '200px'));
  }

  private _error() {
    const text = 'Rezervaci se nepodařilo vytvořit. Zkuste prosím později, nebo zavolejte na telefonní čislo +420 732 932 810';

    this.toasterService.makeToast(text, ToastType.Error, 5000);
  }

  public sendReservation(): void {
    event.preventDefault();

    this.reservationService
      .send(this.reservation.value)
      .pipe(
        take(1)
      )
      .subscribe(this._success.bind(this), this._error.bind(this));
  }
}
