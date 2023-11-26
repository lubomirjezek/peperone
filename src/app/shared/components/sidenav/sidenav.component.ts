import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Link } from '../../models/link';

const LINKS_PRIMARY: Link[] = [
  {
    url: '/denni-menu',
    name: 'Denní menu'
  }, {
    url: '/menu-karta',
    name: 'Menu karta'
  }, {
    url: '/rozvoz',
    name: 'Rozvoz'
  }, {
    url: '/aktuality',
    name: 'Aktuality'
  }, {
    url: '/kariera/kariera',
    name: 'Kariéra'
  }, {
    url: '/galerie/0',
    name: 'Galerie'
  }, {
    url: '/kontakt',
    name: 'Kontakt'
  // }, {
  //   url: '/rezervace',
  //   name: 'Rezervace'
  }
];

const LINKS_SECONDARY: Link[] = [
  {
    url: 'https://www.facebook.com/PizzeriePeperone/',
    name: 'Facebook'
  }, {
    url: 'https://preprod.instagram.com/explore/locations/297372571/pizzeria-a-ristorante-peperone/',
    name: 'Instagram'
  }
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() changeState: EventEmitter<boolean> = new EventEmitter();

  linksPrimary:   Link[] = LINKS_PRIMARY;
  linksSecondary: Link[] = LINKS_SECONDARY;

  constructor() { }

  ngOnInit() { }

  close() {
    this.changeState.emit(false);
  }
}
