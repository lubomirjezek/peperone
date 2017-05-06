import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  headline = 'Denní menu';
  bg       = 'url(../../../assets/img/bg-daily-menu.jpg)';

  constructor() { }

  ngOnInit() { }

}
