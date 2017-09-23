import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-daily-menu-list',
  templateUrl: './daily-menu-list.component.html',
  styleUrls: ['./daily-menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyMenuListComponent implements OnInit {
  _menu: Menu[] = [];
  loading = true;

  @Input() set menu(value) {
    if (value) {
      this._menu = value;
      this.loading = false;
    }
  }

  get menu() {
    return this._menu;
  }

  constructor() { }

  ngOnInit() { }

}
