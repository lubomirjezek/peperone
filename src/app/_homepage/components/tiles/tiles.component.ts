import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
  @HostBinding('style.height') height: string;
  @HostBinding('style.width')  width: string;

  @HostListener('window:resize', ['$event']) handleResize(event) {
    this.setSize(event.target.innerWidth, event.target.innerHeight);
  }

  constructor() {
    this.setSize(window.innerWidth, window.innerHeight);
  }

  ngOnInit() { }

  setSize(wWidth: number, wHeight: number) {
    if (wHeight > 700 && wWidth >= 1280) {
      const width  = 5 / 3 * wHeight;

      this.width  = width + 'px';
      this.height = wHeight + 'px';
    }
  }

}
