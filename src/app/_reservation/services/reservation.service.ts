import { Injectable } from '@angular/core';

import { BaseService } from '../../base.service';
import { Reservation } from '../models/reservation';
import { Observable, of } from 'rxjs';

@Injectable()
export class ReservationService extends BaseService {

/*  private success() {
    const text = 'Děkujeme za Vaši rezervaci. Vyčkejte, prosím, až bude Vaše rezervace potvrzena zpět na uvedený email, do té doby není platná. Budeme se těšit na Vaši návštěvu!';


    this.messageService
      .show(text, Type.Success, 10000);
  }

  private error() {
    const text = 'Rezervaci se nepodařilo vytvořit. Zkuste prosím později, nebo zavolejte na telefonní čislo +420 732 932 810';

    this.messageService
      .show(text, Type.Error, 5000);
  }*/

  public send(params: Reservation): Observable<any> {
    // const endpoint = this.buildUrl(['rezervace'], params);

    // return this.get(endpoint);
    return of(null);
  }

}
