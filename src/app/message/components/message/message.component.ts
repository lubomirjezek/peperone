import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Type } from '../../models/type';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(200, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MessageComponent implements OnInit {
  readonly MESSAGE_TYPES = Type;

  type: number;
  text: string;
  show: boolean;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.data.subscribe(data => {
      this.show = data.show;
      this.text = data.text;
      this.type = data.type;
    });
  }

}
