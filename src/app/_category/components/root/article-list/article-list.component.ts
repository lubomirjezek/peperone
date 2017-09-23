import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  private _articles: Article[] = [];

  loading = true;

  @Input() set articles(value) {
    if (value) {
      this._articles = value;
      this.loading = false;
    }
  }

  get articles() {
    return this._articles;
  }

  constructor() { }

  ngOnInit() { }

}
