import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Menu } from '../../models/menu';

@Component({
  selector: 'app-daily-menu-list',
  templateUrl: './daily-menu-list.component.html',
  styleUrls: ['./daily-menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyMenuListComponent implements OnInit, OnChanges {

  @Input() public menu: Menu[];

  private _loading = true;
  get loading(): boolean {
    return this._loading;
  }

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('menu')) {
      this._loading = false;
    }
  }

}
