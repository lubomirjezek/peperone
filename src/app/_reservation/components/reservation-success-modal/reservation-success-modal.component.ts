import { Component, OnInit } from '@angular/core';
import { McRAIModal } from 'ui';

@Component({
  selector: 'app-reservation-success-modal',
  templateUrl: './reservation-success-modal.component.html',
  styleUrls: ['./reservation-success-modal.component.scss']
})
export class ReservationSuccessModalComponent implements OnInit {

  constructor(
    public modalService: McRAIModal
  ) { }

  ngOnInit() {
  }

}
