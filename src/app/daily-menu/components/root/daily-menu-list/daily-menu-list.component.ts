import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/menu-item';

@Component({
  selector: 'app-daily-menu-list',
  templateUrl: './daily-menu-list.component.html',
  styleUrls: ['./daily-menu-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyMenuListComponent implements OnInit {
  @Input() data: MenuItem[] = [];

  constructor() { }

  ngOnInit() { }

}
