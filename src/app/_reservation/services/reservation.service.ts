import { Injectable } from '@angular/core';
import { MessageService } from '../../message/services/message.service';
import { Type } from '../../message/models/type';
import { BaseService } from '../../base.service';
import { Reservation } from '../models/reservation';

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

  public send(params: Reservation): void {
    const endpoint = this.buildUrl(['rezervace'], params);

    this.get(endpoint)
      // .subscribe(this.success.bind(this), this.error.bind(this));
  }

}
