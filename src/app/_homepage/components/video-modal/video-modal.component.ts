import { Component, OnInit } from '@angular/core';
import { McRAIModal } from 'ui';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit {

  constructor(
    private _modalService: McRAIModal
  ) { }

  ngOnInit() { }

  public closeModal() {
    this._modalService.close();
  }
}
