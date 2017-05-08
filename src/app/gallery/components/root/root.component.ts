import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleryService } from '../../services/gallery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  galleries: Gallery[] = [];
  galleryIndex = 0;
  imageIndex = 0;
  showDetail = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.galleryIndex = this.activatedRoute.snapshot.params.id;
    this.galleryService
      .getList()
      .subscribe(galleries => this.galleries = galleries);
  }

  getActiveGallery() {
    return this.galleries[this.galleryIndex];
  }

  prevGallery() {
    if (this.galleryIndex > 0) {
      this.galleryIndex--;
    } else {
      this.galleryIndex = this.galleries.length - 1;
    }
  }

  nextGallery() {
    if (this.galleryIndex < this.galleries.length - 1) {
      this.galleryIndex++;
    } else {
      this.galleryIndex = 0;
    }
  }

  getActiveImage() {
    return this.galleries[this.galleryIndex].image[this.imageIndex];
  }

  openDetail(index) {
    this.showDetail = true;
    this.imageIndex = index;
  }

  prevImage() {
    if (this.imageIndex > 0) {
      this.imageIndex--;
    } else {
      this.imageIndex = this.galleries[this.galleryIndex].image.length - 1;
    }
  }

  nextImage() {
    if (this.imageIndex < this.galleries[this.galleryIndex].image.length - 1) {
      this.imageIndex++;
    } else {
      this.imageIndex = 0;
    }
  }

  closeDetail() {
    this.showDetail = false;
  }
}

