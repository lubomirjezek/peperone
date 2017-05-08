import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../models/article';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  private static API_URL = 'http://mr-g.cz/back/www/api/';

  constructor(
    private http: Http
  ) { }

  getArticles(name: string): Observable<Article[]> {
    return this.http
      .get(CategoryService.API_URL + 'pages/' + name)
      .map(response => response.json());
  }
}
