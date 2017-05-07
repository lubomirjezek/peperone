import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadlineComponent } from './components/headline/headline.component';
import { BurgerComponent } from './components/header/burger/burger.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeadlineComponent,
    SidenavComponent,
    HeaderComponent,
    ContentComponent,
    BurgerComponent,
    LoaderComponent
  ],
  declarations: [
    HeadlineComponent,
    SidenavComponent,
    HeaderComponent,
    ContentComponent,
    BurgerComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
