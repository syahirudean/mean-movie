import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RXJS
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

// MODELS
import { Movie } from '../../shared/models/movie';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // BUTTON SERVICE TO ADD SCHEDULE FROM COURSE.TS 👉 DATETIME-FORM.TS
  private callMovie = new BehaviorSubject<Movie>({});
  privateURL = 'http://localhost:8080/movies';
  movie = this.callMovie.asObservable();

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  movies: Movie[] = [
    // Create movie object with id, title, description, director, casts, release date, rating.
  ];
  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorService
  ) {}

  getMovie(movie_id: number) {
    // find movie by id
    let selected_movie = this.movies.find((movie) => movie.id === movie_id);
    return this.callMovie.next(selected_movie!);
  }

  fetchAll(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.privateURL, { responseType: 'json' })
      .pipe(
        tap((_) => console.log('fetched groceries')),
        catchError(
          this.errorHandlerService.handleError<Movie[]>('fetchAll', [])
        )
      );
  }

  post(movie: Movie): Observable<any> {
    return this.http
      .post<Movie>(this.privateURL, movie, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>('post')));
  }

  update(grocery: Movie): Observable<any> {
    return this.http
      .put<Movie>(this.privateURL, grocery, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>('update')));
  }

  delete(id: number): Observable<any> {
    const url = `http://localhost:3000/groceries/${id}`;

    return this.http
      .delete<Movie>(url, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>('delete')));
  }
}
