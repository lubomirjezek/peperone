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
  }, {
    path: 'galerie',
    loadChildren: './gallery/gallery.module#GalleryModule'
  }, {
    path: 'kontakt',
    loadChildren: './contact/contact.module#ContactModule'
  }, {
    path: 'rezervace',
    loadChildren: './reservation/reservation.module#ReservationModule'
  }, {
    path: ':category',
    loadChildren: './category/category.module#CategoryModule'
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
