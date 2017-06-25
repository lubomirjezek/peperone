import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Type } from '../../services/message.service';
import { animate, style, transition, trigger } from '@angular/animations';

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
  @Input() text: string;
  @Input('class') @HostBinding('class') classList: string;
  @HostBinding('@fadeInOut') doAnimate = true;

  @Input() set type(value: number) {
    switch (value) {
      default:
      case Type.Info:
        this.classList += ' info';
        break;
      case Type.Success:
        this.classList += ' success';
        break;
      case Type.Error:
        this.classList += ' error';
        break;
      case Type.Warning:
        this.classList += ' warning';
        break;
    }
  }

  constructor() { }

  ngOnInit() { }

}
