import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { McRAIToaster, ToastType } from 'ui';

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
    private _toasterService: McRAIToaster
  ) { }

  ngOnInit() { }

  private _success() {
    const text = 'Děkujeme za Vaši rezervaci. Vyčkejte, prosím, až bude Vaše rezervace potvrzena zpět na uvedený email, do té doby není platná. Budeme se těšit na Vaši návštěvu!';

    this._toasterService.makeToast(text, ToastType.Success, 10000);
  }

  private _error() {
    const text = 'Rezervaci se nepodařilo vytvořit. Zkuste prosím později, nebo zavolejte na telefonní čislo +420 732 932 810';

    this._toasterService.makeToast(text, ToastType.Error, 5000);
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
