import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './homepage/homepage.module#HomepageModule'
  }, {
    path: 'denni-menu',
    loadChildren: './daily-menu/daily-menu.module#DailyMenuModule'
  }, {
    path: 'menu-karta',
    loadChildren: './menu-card/menu-card.module#MenuCardModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
