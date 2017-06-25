import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadlineComponent } from './components/headline/headline.component';
import { BurgerComponent } from './components/header/burger/burger.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { MessageService } from './services/message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MessageComponent
  ],
  declarations: [
    HeadlineComponent,
    SidenavComponent,
    HeaderComponent,
    ContentComponent,
    BurgerComponent,
    LoaderComponent,
    FooterComponent,
    MessageComponent,
  ],
  entryComponents: [
    MessageComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MessageService
      ]
    };
  }
}
