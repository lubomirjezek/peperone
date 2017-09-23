import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './_homepage/homepage.module#HomepageModule',
    data: {
      title: 'Pizzeria a restaurace peperone - Náměšť nad Oslavou',
      description: 'Typické italské rodinné prostředí s příjemnou atmosférou, milý personál, rychlý servis, čerstvé pokrmy – to vše jsou hodnoty.'
    }
  }, {
    path: 'denni-menu',
    loadChildren: './_daily-menu/daily-menu.module#DailyMenuModule',
    data: {
      title: 'Denní menu a obědy - Náměšť nad Oslavou',
      description: 'Máte hlad a nevíte kam přes týden na oběd? Pizzeria a restaurace Peperone má každý den skvělé denní menu za lidové ceny.'
    }
  }, {
    path: 'menu-karta',
    loadChildren: './_menu-card/menu-card.module#MenuCardModule',
    data: {
      title: 'Pizza a menu - Náměšť nad Oslavou',
      description: 'U nás v pizzerii si můžete pochutnat na pizze, která je připravovaná před zraky hostů na šamotovém kameni, osvěžujících salátech, domácích těstovinách, ale i výborných burgerech.'
    }
  }, {
    path: 'galerie',
    loadChildren: './_gallery/gallery.module#GalleryModule',
    data: {
      title: 'Pizzeria a restaurace peperone - Náměšť nad Oslavou',
      description: 'Typické italské rodinné prostředí s příjemnou atmosférou, milý personál, rychlý servis, čerstvé pokrmy – to vše jsou hodnoty.'
    }
  }, {
    path: 'kontakt',
    loadChildren: './_contact/contact.module#ContactModule',
    data: {
      title: 'Pizzeria a restaurace peperone - Náměšť nad Oslavou',
      description: 'Typické italské rodinné prostředí s příjemnou atmosférou, milý personál, rychlý servis, čerstvé pokrmy – to vše jsou hodnoty.'
    }
  }, {
    path: 'rezervace',
    loadChildren: './_reservation/reservation.module#ReservationModule',
    data: {
      title: 'Pizzeria a restaurace peperone - Náměšť nad Oslavou',
      description: 'Typické italské rodinné prostředí s příjemnou atmosférou, milý personál, rychlý servis, čerstvé pokrmy – to vše jsou hodnoty.'
    }
  }, {
    path: ':category',
    loadChildren: './_category/category.module#CategoryModule',
    data: {
      title: 'Pizzeria a restaurace peperone - Náměšť nad Oslavou',
      description: 'Typické italské rodinné prostředí s příjemnou atmosférou, milý personál, rychlý servis, čerstvé pokrmy – to vše jsou hodnoty.'
    }
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
