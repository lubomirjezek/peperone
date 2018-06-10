import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
  ],
  declarations: [
    RootComponent,
    ArticleComponent,
    ArticleListComponent
  ]
})
export class CategoryModule { }
