import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Menu } from '../models/menu';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuCardService {
  private static API_URL = 'http://mr-g.cz/back/www/api/';

  constructor(
    private http: Http
  ) { }

  getMenu(id: number): Observable<Menu[]> {
    return this.http
      .get(MenuCardService.API_URL + 'menukarta/' + id)
      .map(response => response.json());
  }
}
