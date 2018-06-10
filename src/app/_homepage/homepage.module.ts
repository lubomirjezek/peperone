import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { McRAIButtonModule, McRAIIconModule, McRAIModalModule } from 'ui';

import { RootComponent } from './components/root/root.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { TileComponent } from './components/tile/tile.component';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from '../shared/shared.module';
import { VideoModalComponent } from './components/video-modal/video-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    McRAIIconModule,
    McRAIButtonModule,
    McRAIModalModule
  ],
  declarations: [
    RootComponent,
    TilesComponent,
    TileComponent,
    MapComponent,
    VideoModalComponent
  ],
  entryComponents: [
    VideoModalComponent
  ]
})
export class HomepageModule { }
