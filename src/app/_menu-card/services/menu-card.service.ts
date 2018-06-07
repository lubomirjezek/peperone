import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class MenuCardService extends BaseService {

  public getMenu(id: number): Observable<Menu[]> {
    const endpoint = this.buildUrl(['menukarta', id]);

    return this.get(endpoint);
  }
}
