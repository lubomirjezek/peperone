import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../models/menu';
import 'rxjs/add/operator/map';

@Injectable()
export class DailyMenuService {
  private static API_URL = 'http://mr-g.cz/back/www/api/';

  constructor(
    private http: Http
  ) { }

  getList(): Observable<Menu[]> {
    return this.http
               .get(DailyMenuService.API_URL + 'dennimenu')
               .map(response => response.json());
  }
}
