import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Movie } from '../../shared/models/movie';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  private movieDoc!: AngularFirestoreDocument<Movie>;
  movie$!: Observable<Movie | undefined>;
  modalRef?: BsModalRef;
  movieID!: string;
  constructor(
    private afs: AngularFirestore,
    public data: DataService,
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {
    this.getMovie();
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

  getMovie(): void {
    this.movieID = String(this.route.snapshot.paramMap.get('id'));
    this.movieDoc = this.afs.doc<Movie>(`movies/${this.movieID}`);
    this.movie$ = this.movieDoc.valueChanges({ idFeild: 'id' });
    this.movie$.subscribe((data) => {
      this.data.sendEditMovie(data!);
    });
    this.data.currentModalCloseState.subscribe((state) => {
      this.closeEditModal(state);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  closeEditModal(state: boolean) {
    if (state) {
      this.modalService.hide();
    }
  }
}
