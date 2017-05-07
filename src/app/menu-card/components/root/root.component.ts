import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { Observable } from 'rxjs/Observable';
import { MenuCardService } from '../../services/menu-card.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  headline = 'Menu karta';
  bg = 'url(../../../assets/img/bg-menu-card.jpg)';

  pizzas:   Observable<Menu[]>;
  toppings: Observable<Menu[]>;
  soups:    Observable<Menu[]>;
  starters: Observable<Menu[]>;
  pasta:    Observable<Menu[]>;
  risotto:  Observable<Menu[]>;
  gnocchi:  Observable<Menu[]>;
  others:   Observable<Menu[]>;
  specialities: Observable<Menu[]>;
  burgers:  Observable<Menu[]>;
  salads:   Observable<Menu[]>;
  sides:    Observable<Menu[]>;
  desserts:   Observable<Menu[]>;
  kidsFood: Observable<Menu[]>;
  coffee:   Observable<Menu[]>;
  tea:      Observable<Menu[]>;
  chocolate: Observable<Menu[]>;
  beer:     Observable<Menu[]>;
  wine:     Observable<Menu[]>;
  nonAlcoholic: Observable<Menu[]>;
  aperitives: Observable<Menu[]>;
  destilates: Observable<Menu[]>;
  whiskey:    Observable<Menu[]>;
  rums:   Observable<Menu[]>;
  likers: Observable<Menu[]>;

  constructor(
    private menuCardService: MenuCardService
  ) { }

  ngOnInit() {
    this.pizzas = this.menuCardService.getMenu(1);
    this.toppings = this.menuCardService.getMenu(2);
    this.soups = this.menuCardService.getMenu(14);
    this.starters = this.menuCardService.getMenu(13);
    this.pasta = this.menuCardService.getMenu(3);
    this.risotto = this.menuCardService.getMenu(4);
    this.gnocchi = this.menuCardService.getMenu(5);
    this.others = this.menuCardService.getMenu(8);
    this.specialities = this.menuCardService.getMenu(7);
    this.burgers = this.menuCardService.getMenu(16);
    this.salads = this.menuCardService.getMenu(6);
    this.sides = this.menuCardService.getMenu(11);
    this.desserts = this.menuCardService.getMenu(9);
    this.kidsFood = this.menuCardService.getMenu(10);
    this.coffee = this.menuCardService.getMenu(15);
    this.tea = this.menuCardService.getMenu(17);
    this.chocolate = this.menuCardService.getMenu(18);
    this.beer = this.menuCardService.getMenu(20);
    this.wine = this.menuCardService.getMenu(21);
    this.nonAlcoholic = this.menuCardService.getMenu(19);
    this.aperitives = this.menuCardService.getMenu(22);
    this.destilates = this.menuCardService.getMenu(23);
    this.whiskey = this.menuCardService.getMenu(24);
    this.rums = this.menuCardService.getMenu(25);
    this.likers = this.menuCardService.getMenu(26);
  }

}
