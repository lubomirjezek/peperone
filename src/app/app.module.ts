import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';

export const API_URL = 'http://peperone.cz/back/www/api/';
export const ASSETS_URL = 'http://peperone.cz/back/www';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    OverlayModule
  ],
  providers: [
    { provide: 'API_URL', useValue: API_URL },
    { provide: 'ASSETS_URL', useValue: ASSETS_URL }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
