import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        animate('300ms linear', keyframes([
          style({ opacity: .5, transform: 'scale(0.5)',  offset: 0 }),
          style({ opacity: .8, transform: 'scale(1.1)',  offset: .8 }),
          style({ opacity: 1,  transform: 'scale(1)',    offset: 1 })
        ]))
      ])
    ])
  ]
})
export class TileComponent implements OnInit {
  @Input('class') @HostBinding('class') classList: string = '';
  @HostBinding('@scaleIn') doAnimate = true;
  @Input() color = '';

  constructor() { }

  ngOnInit() {
    if (this.color) {
      this.classList += ' ' + this.color;
    }
  }

}
