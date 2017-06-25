import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MessageService } from './shared/services/message.service';

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
  @ViewChild('messageAnchor', { read: ViewContainerRef }) messageAnchor: ViewContainerRef;
  state = false;

  constructor (
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.anchor = this.messageAnchor;
  }

  handleStateChange(state: boolean) {
    this.state = state;
  }
}
