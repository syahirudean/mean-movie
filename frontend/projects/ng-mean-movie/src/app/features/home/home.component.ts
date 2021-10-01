import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';
import { Movie } from '../../shared/models/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.movies$ = this.fetchAll();
  }

  fetchAll(): Observable<Movie[]> {
    return this.data.fetchAll();
  }

  update(id: number, newItem: Partial<Movie>): void {
    const item = (<string>newItem).trim();
    if (!item) return;

    const newMovie: Movie = {};

    this.movies$ = this.data
      .update(newMovie)
      .pipe(tap(() => (this.movies$ = this.fetchAll())));
  }

  delete(id: number): void {
    this.movies$ = this.data
      .delete(id)
      .pipe(tap(() => (this.movies$ = this.fetchAll())));
  }
}
