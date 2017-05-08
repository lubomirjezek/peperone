import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('open', [
      state('0', style({ })),
      state('1',  style({ transform: 'translateX(-430px)' })),
      transition('* => *', animate('300ms cubic-bezier(.35, 0, .25, 1)'))
    ])
  ]
})
export class AppComponent implements OnInit {
  state = false;

  constructor () { }

  ngOnInit() { }

  handleStateChange(state: boolean) {
    this.state = state;
  }
}
