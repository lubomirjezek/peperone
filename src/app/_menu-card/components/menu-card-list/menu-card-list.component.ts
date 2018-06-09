import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-card-list',
  templateUrl: './menu-card-list.component.html',
  styleUrls: ['./menu-card-list.component.scss']
})
export class MenuCardListComponent implements OnInit, OnChanges {

  @Input() public items: Menu[];
  @Input() columns: number;

  private _loading = true;
  get loading(): boolean {
    return this._loading;
  }

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('items')) {
      this._loading = false;
    }
  }

}
