import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { UIModule } from '@mcrai/ui';

import { RootComponent } from './components/root/root.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    UIModule
  ],
  declarations: [
    RootComponent,
  ]
})
export class GalleryModule { }
