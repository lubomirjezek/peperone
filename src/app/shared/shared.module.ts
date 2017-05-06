import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadlineComponent } from './components/headline/headline.component';
import { BurgerComponent } from './components/header/burger/burger.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

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
  ],
  declarations: [
    HeadlineComponent,
    SidenavComponent,
    HeaderComponent,
    ContentComponent,
    BurgerComponent,
  ]
})
export class SharedModule { }
