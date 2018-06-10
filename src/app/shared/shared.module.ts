import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadlineComponent } from './components/headline/headline.component';
import { BurgerComponent } from './components/burger/burger.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';

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
    LoaderComponent,
    FooterComponent,
  ],
  declarations: [
    HeadlineComponent,
    SidenavComponent,
    HeaderComponent,
    ContentComponent,
    BurgerComponent,
    LoaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
