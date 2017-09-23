import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  showModal = false;

  constructor() { }

  ngOnInit() { }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
