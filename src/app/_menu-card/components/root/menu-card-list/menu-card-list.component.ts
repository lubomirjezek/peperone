import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../../models/menu';

@Component({
  selector: 'app-menu-card-list',
  templateUrl: './menu-card-list.component.html',
  styleUrls: ['./menu-card-list.component.scss']
})
export class MenuCardListComponent implements OnInit {
  private _items: Menu[] = [];

  loading = true;

  @Input() columns: number;

  @Input() set items(value) {
    if (value) {
      this._items = value;
      this.loading = false;
    }
  }

  get items() {
    return this._items;
  }

  constructor() { }

  ngOnInit() { }

}
