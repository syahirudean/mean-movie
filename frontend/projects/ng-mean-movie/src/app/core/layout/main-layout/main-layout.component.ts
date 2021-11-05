import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  modalRef?: BsModalRef;

  socialLogins: any = [{ title: 'Google' }, { title: 'Facebook' }];


  @ViewChild('authModal')
  authModal!: TemplateRef<HTMLDivElement>;
  authModalConfig = {
    animated: false,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'my-modal modal-dialog-centered',
  };
  subscription?: Subscription;

  constructor(
    public auth: AuthService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.subscription = this.auth.currentAuthSource.subscribe(
      (state: boolean) => {
        state ? this.openAuthModal(state) : this.modalRef?.hide();
      }
    );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onActivate() {
    window.scroll(0, 0);
  }

  openAuthModal(authState: boolean) {
    if (authState) {
      this.modalRef = this.modalService.show(
        this.authModal,
        this.authModalConfig
      );
    }
  }
}
