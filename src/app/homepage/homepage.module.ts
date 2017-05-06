import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { UIModule } from '@mcrai/ui';

import { RootComponent } from './components/root/root.component';
import { TilesComponent } from './components/root/tiles/tiles.component';
import { TileComponent } from './components/root/tile/tile.component';
import { MapComponent } from './components/root/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
    UIModule
  ],
  declarations: [
    RootComponent,
    TilesComponent,
    TileComponent,
    MapComponent
  ]
})
export class HomepageModule { }
