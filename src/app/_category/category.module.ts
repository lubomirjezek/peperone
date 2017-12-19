import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UIModule } from '@mcrai/ui';

import { CategoryService } from './services/category.service';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/root/article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    UIModule
  ],
  declarations: [
    RootComponent,
    ArticleComponent,
    ArticleListComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }