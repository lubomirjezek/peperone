import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CategoryService } from '../../services/category.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit, OnDestroy {
  private _destroy: Subject<null> = new Subject<null>();

  private _article$: Observable<Article>;
  get article$(): Observable<Article> {
    return this._article$;
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _categoryService: CategoryService
  ) { }

  ngOnInit() {
    this._activatedRoute.params
      .pipe(
        takeUntil(this._destroy)
      )
      .subscribe((params: { [key: string]: string }) => {
        this._article$ = this._categoryService.getArticle(params.category, params.article);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
  }

}
