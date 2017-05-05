import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() state: boolean;

  @Output() changeState: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  closeNav() {
    this.changeState.emit(false);
  }

  toggleNav() {
    this.changeState.emit(!this.state);
  }
}
