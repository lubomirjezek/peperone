import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Article } from '../models/article';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  public getArticles(name: string): Observable<Article[]> {
    const endpoint = this.buildUrl(['pages', name]);

    return this.get(endpoint);
  }

  public getArticle(category: string, article: string): Observable<Article> {
    const endpoint = this.buildUrl(['pages', category, article]);

    return this.get(endpoint);
  }

}
