import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../../models/menu';

@Component({
  selector: 'app-daily-menu-list',
  templateUrl: './daily-menu-list.component.html',
  styleUrls: ['./daily-menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyMenuListComponent implements OnInit {
  @Input() menu: Menu[] = [];

  constructor() { }

  ngOnInit() { }

}
