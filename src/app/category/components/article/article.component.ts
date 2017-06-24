import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const category = params.category;
      const name     = params.article;

      this.categoryService
        .getArticle(category, name)
        .subscribe(article => this.article = article);
    });
  }

}
