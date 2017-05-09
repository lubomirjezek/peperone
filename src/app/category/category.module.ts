import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './services/category.service';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ],
  declarations: [
    RootComponent,
    ArticleComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
