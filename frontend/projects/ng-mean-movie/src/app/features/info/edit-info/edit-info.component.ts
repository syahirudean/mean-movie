import { Component, Input, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../../../core/services/data.service';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
})
export class EditInfoComponent implements OnInit {
  @Input() movieID!: string;
  movie!: Movie;
  private movieDoc!: AngularFirestoreDocument<Movie>;

  constructor(public data: DataService, private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.data.currentEditMovieData.subscribe((data) => {
      this.movie = data;
    });
    console.log(this.movieID);
  }

  onSubmit() {
    this.movieDoc = this.afs.doc<Movie>(`movies/${this.movieID}`);
    this.movieDoc
      .update(this.movie!)
      .then(() => {
        alert('Successfully updated!');
        this.data.sendCloseModalState(true);
      })
      .catch((err) => {
        alert(`Error: ${err}`);
        this.data.sendCloseModalState(true);
      });
  }
}
