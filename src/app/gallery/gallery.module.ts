import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { UIModule } from '@mcrai/ui';
import { SharedModule } from '../shared/shared.module';

import { GalleryService } from './services/gallery.service';

import { RootComponent } from './components/root/root.component';
import { GalleryListComponent } from './components/root/gallery-list/gallery-list.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    UIModule
  ],
  declarations: [
    RootComponent,
    GalleryListComponent,
  ],
  providers: [
    GalleryService
  ]
})
export class GalleryModule { }
