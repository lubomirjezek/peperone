import { Component, EventEmitter, HostBinding, Inject, Input, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { API_URL } from '../../../app.module';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss'],
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
export class GalleryDetailComponent implements OnInit {
  private _image;
  src: string;

  @HostBinding('@fadeInOut') doAnimate = true;
  @Output() nextEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() prevEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter();

  @Input() set image(value) {
    if (value) {
      this._image = value;
      this.loadImage(this._image);
    }
  }

  get image() {
    return this._image;
  }

  constructor(
    @Inject('ASSETS_URL') private _assetsUrl: string
  ) { }

  ngOnInit() { }

  private loadImage(image) {
    this.src = '/assets/img/rolling.svg';

    const loaded = () => {
      this.src = this._assetsUrl + image.normal;
    };

    const tmpImage = new Image();
    tmpImage.onload = loaded;
    tmpImage.src = this._assetsUrl + image.normal;
  }

  next() {
    this.nextEvent.emit();
  }

  prev() {
    this.prevEvent.emit();
  }

  close() {
    this.closeEvent.emit();
  }
}
