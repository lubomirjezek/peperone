import { Component, OnInit } from '@angular/core';
import { DailyMenuService } from '../../service/daily-menu.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  headline = 'Denní menu';
  bg = 'url(../../../assets/img/bg-daily-menu.jpg)';
  menu: Observable<MenuItem[]>;

  constructor(
    private dailyMenuService: DailyMenuService
  ) { }

  ngOnInit() {
    this.menu = this.dailyMenuService.getItems();
  }

}
