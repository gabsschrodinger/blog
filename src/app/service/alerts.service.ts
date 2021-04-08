import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertsComponent } from '../alerts/alerts.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(alertMsg: string, type: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertsComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = alertMsg;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, 'danger');
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, 'success');
  }

  showAlertInfo(message: string) {
    this.showAlert(message, 'info');
  }
}
