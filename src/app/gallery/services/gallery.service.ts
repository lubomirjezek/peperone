import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Gallery } from '../models/gallery';
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {
  private static API_URL = 'http://mr-g.cz/back/www/api/';

  constructor(
    private http: Http
  ) { }

  getList(): Observable<Gallery[]> {
    return this.http
      .get(GalleryService.API_URL + 'gallery')
      .map(response => response.json());
  }
}
