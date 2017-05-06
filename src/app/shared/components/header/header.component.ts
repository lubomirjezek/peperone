import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private static HOMEPAGE_ROUTE = '/';

  @Input() state: boolean;
  @Output() changeState: EventEmitter<boolean> = new EventEmitter();
  @HostBinding('class.background') showBackground: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(this.handleRouteChange.bind(this));
  }

  private handleRouteChange(event) {
    this.showBackground = event.url !== HeaderComponent.HOMEPAGE_ROUTE;
    window.scrollTo(0, 0);
  }

  closeNav() {
    this.changeState.emit(false);
  }

  toggleNav() {
    this.changeState.emit(!this.state);
  }
}
