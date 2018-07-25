import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { animate, style, transition, trigger } from '@angular/animations';
import { API_URL } from '../../../app.module';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class GalleryListComponent implements OnInit {
  private _gallery: Gallery;

  @Output() nextEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() prevEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() detailEvent: EventEmitter<number> = new EventEmitter();

  @Input() set gallery(value) {
    if (value) {
      this.loadGallery(value);
    }
  }

  get gallery() {
    return this._gallery;
  }

  constructor(
    @Inject('ASSETS_URL') private _assetsUrl: string
  ) { }

  ngOnInit() { }

  private loadGallery(gallery) {
    gallery.image.map(image => this.loadImage(image));
    this._gallery = gallery;
  }

  private loadImage(image) {
    image = Object.assign(image, { displaySrc: '/assets/img/rolling.svg' });

    const loaded = () => {
      image.displaySrc = this._assetsUrl + image.thumb;
    };

    const tmpImage = new Image();
    tmpImage.onload = loaded;
    tmpImage.src = this._assetsUrl + image.thumb;
  }

  detail(index) {
    this.detailEvent.emit(index);
  }

  next() {
    this.nextEvent.emit();
  }

  prev() {
    this.prevEvent.emit();
  }
}
