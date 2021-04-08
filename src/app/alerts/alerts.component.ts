import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() message: string;
  @Input() alertType: string = 'success';


  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.modal.hide();
  }

}
