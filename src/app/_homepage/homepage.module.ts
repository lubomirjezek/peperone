import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';

import { RootComponent } from './components/root/root.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { TileComponent } from './components/tile/tile.component';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
  ],
  declarations: [
    RootComponent,
    TilesComponent,
    TileComponent,
    MapComponent
  ]
})
export class HomepageModule { }
