import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../models/menu-item';
import 'rxjs/add/operator/map';

@Injectable()
export class DailyMenuService {
  private static API_URL = 'http://mr-g.cz/back/www/api/dennimenu';

  constructor(
    private http: Http
  ) { }

  getItems(): Observable<MenuItem[]> {
    return this.http
               .get(DailyMenuService.API_URL)
               .map(response => response.json());
  }
}
