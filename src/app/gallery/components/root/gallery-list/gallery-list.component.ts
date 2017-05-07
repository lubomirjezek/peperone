import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from '../../../models/gallery';
import { animate, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

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
  _galleries: Gallery[];
  _index = 0;

  @Input() set galleries(value: Gallery[]) {
    if (value) {
      this._galleries = value;
      this.loadGallery(this._galleries[this._index]);
    }
  }

  get galleries() {
    return this._galleries;
  }

  set index(value: number) {
    this._index = value;
    this.loadGallery(this._galleries[this._index]);
    this.router.navigate(['galerie/', this._index]);
  }

  get index() {
    return this._index;
  }

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this._index = +this.activateRoute.snapshot.params.id;
  }

  private loadGallery(gallery) {
    gallery.image.map(image => this.loadImage(image));
  }

  private loadImage(image) {
    image = Object.assign(image, { displaySrc: '/assets/img/rolling.svg' });

    const loaded = () => {
      image.displaySrc = 'http://mr-g.cz/back/www' + image.thumb;
    };

    const tmpImage = new Image();
    tmpImage.onload = loaded;
    tmpImage.src = 'http://mr-g.cz/back/www' + image.thumb;
  }

  decrement() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.galleries.length - 1;
    }
  }

  increment() {
    if (this.index < this.galleries.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

}
