import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../../models/menu';

@Component({
  selector: 'app-menu-card-list',
  templateUrl: './menu-card-list.component.html',
  styleUrls: ['./menu-card-list.component.scss']
})
export class MenuCardListComponent implements OnInit {
  @Input() items: Menu[] = [];
  @Input() columns: number;

  constructor() { }

  ngOnInit() {
  }

}
