import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  headline = 'Kontakt';
  bg = 'url(../../../assets/img/bg-contact.jpg)';

  constructor() { }

  ngOnInit() { }

}
