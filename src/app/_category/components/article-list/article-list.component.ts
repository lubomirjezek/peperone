import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Article } from '../../models/article';
import { API_URL } from '../../../app.module';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnChanges {

  @Input() public articles: Article[];

  private _loading = true;
  get loading(): boolean {
    return this._loading;
  }

  constructor(
    @Inject('API_URL') public apiUrl: string
  ) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('articles')) {
      this._loading = false;
    }
  }

}
