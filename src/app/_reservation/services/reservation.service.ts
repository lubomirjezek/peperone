import { Injectable } from '@angular/core';

import { BaseService } from '../../base.service';
import { Reservation } from '../models/reservation';
import { Observable } from 'rxjs';

@Injectable()
export class ReservationService extends BaseService {

  public send(params: Reservation): Observable<any> {
    const endpoint = this.buildUrl(['rezervace'], params);

    return this.get(endpoint);
  }

}
