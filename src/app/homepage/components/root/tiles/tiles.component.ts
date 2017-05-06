import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
  @HostBinding('style.height') height = window.innerHeight + 'px';
  @HostBinding('style.width')  width  = window.innerWidth + 'px';

  @HostListener('window:resize', ['$event']) handleResize(event) {
    this.width  = event.target.innerWidth  + 'px';
    this.height = event.target.innerHeight + 'px';
  }

  constructor() { }

  ngOnInit() { }

}
