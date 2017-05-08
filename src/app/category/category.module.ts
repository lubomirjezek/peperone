import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ],
  declarations: [
    RootComponent
  ]
})
export class CategoryModule { }
