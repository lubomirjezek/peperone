import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/gallery';
import { GalleryService } from '../../services/gallery.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  galleries: Observable<Gallery[]>;

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.galleries = this.galleryService.getList();
  }

}
