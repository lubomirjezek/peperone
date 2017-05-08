import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './services/category.service';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ],
  declarations: [
    RootComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
