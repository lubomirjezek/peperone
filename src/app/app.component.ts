import { Component, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('open', [
      state('0', style({ transform: 'translateX(0)' })),
      state('1',  style({ transform: 'translateX(-320px)' })),
      transition('* => *', animate('300ms cubic-bezier(.35, 0, .25, 1)'))
    ])
  ]
})
export class AppComponent {
  @HostBinding('@open') openNavigation = true;

  toggle() {
    this.openNavigation = !this.openNavigation;
  }
}
