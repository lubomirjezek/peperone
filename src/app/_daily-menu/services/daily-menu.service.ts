import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class DailyMenuService extends BaseService {

  public getList(): Observable<Menu[]> {
    const endpoint = this.buildUrl(['dennimenu']);

    return this.get(endpoint);
  }

}
