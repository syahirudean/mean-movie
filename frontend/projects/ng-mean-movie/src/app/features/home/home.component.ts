import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { DataService } from '../../core/services/data.service';
import { Movie } from '../../shared/models/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private moviesCollection!: AngularFirestoreCollection<Movie>;
  movies$!: Observable<Movie[]>;
  constructor(public auth: AuthService, public data: DataService, private afs: AngularFirestore) {
    this.moviesCollection = this.afs.collection<Movie>('movies');
    this.movies$ = this.moviesCollection.valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {}
}
