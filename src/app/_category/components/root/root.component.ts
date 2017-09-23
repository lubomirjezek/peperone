import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    const name = this.activatedRoute.snapshot.params.category;
    this.articles = this.categoryService.getArticles(name);
  }

}
