import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Article } from '../../models/article';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
  private _destroy: Subject<null> = new Subject<null>();

  private _articles$: Observable<Article[]>;
  get articles$(): Observable<Article[]> {
    return this._articles$;
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
        this._articles$ = this._categoryService.getArticles(params.name);
      });
  }

  ngOnDestroy() {
    this._destroy.next();
  }

}
