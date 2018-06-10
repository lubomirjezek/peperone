import { Component, OnInit } from '@angular/core';
import { McRAIModal, McRAIModalOptions } from 'ui';

import { VideoModalComponent } from '../video-modal/video-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(
    private _modalService: McRAIModal
  ) { }

  ngOnInit() { }

  openVideoModal() {
    this._modalService.open(VideoModalComponent, new McRAIModalOptions('800px', '525px'));
  }

}
