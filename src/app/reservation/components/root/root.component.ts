import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  headline = 'Rezervace';
  bg = 'url(../../../assets/img/bg-reservation.jpg)';

  constructor() { }

  ngOnInit() { }

}
