import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { MessageService, Type } from '../../shared/services/message.service';

@Injectable()
export class ReservationService {

  private apiUrl = 'http://mr-g.cz/back/www/api/';

  constructor(
    private http: Http,
    private messageService: MessageService
  ) { }

  private getOptions() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  private handleResponse(res: Response) {
    return res.json();
  }

  private success() {
    const text = 'Děkujeme za Vaši rezervaci. Vyčkejte, prosím, až bude Vaše rezervace potvrzena zpět na uvedený email, do té doby není platná. Budeme se těšit na Vaši návštěvu!';

    this.messageService
      .show(text, Type.Success, 10000);
  }

  private error() {
    const text = 'Rezervaci se nepodařilo vytvořit. Zkuste prosím později, nebo zavolejte na telefonní čislo +420 732 932 810';

    this.messageService
      .show(text, Type.Error, 5000);
  }

  send(data) {
    // fuck nette in the ass
    const params  = '?count=' + data.count
      + '&date=' + data.date
      + '&email=' + data.email
      + '&name=' + data.name
      + '&tel=' + data.tel
      + '&time_from=' + data.time_from
      + '&time_to=' + data.time_to
      + '&note=' + data.note;

    this.http
      .get(this.apiUrl + 'rezervace' + params)
      .map(this.handleResponse)
      .subscribe(this.success.bind(this), this.error.bind(this));
  }

}
