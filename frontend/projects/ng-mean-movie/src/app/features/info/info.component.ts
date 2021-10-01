import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(public data: DataService, private modalService: BsModalService) {
    this.data.getMovie(6);
  }

  // MODAL CONFIG
  modalConfig = {
    animated: false,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'my-modal modal-dialog-centered',
  };

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  edit() {
    console.log('click');
  }
}
