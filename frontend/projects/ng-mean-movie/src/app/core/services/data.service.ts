// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RXJS
import { BehaviorSubject, Subject } from 'rxjs';
// import { tap, map, catchError, first } from 'rxjs/operators';

// MODELS
import { Movie } from '../../shared/models/movie';
// import { User } from '../../shared/models/user';
// import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // MOVIE DATA FROM EDIT MOVIE FROM INFO.TS 👉 EDIT-INFO.TS
  private editMovieData = new BehaviorSubject({});
  currentEditMovieData = this.editMovieData.asObservable();

  // MODAL CLOSE STATE FROM EDIT-INFO.TS 👉 INFO.TS
  private modalCloseState = new BehaviorSubject(false);
  currentModalCloseState = this.modalCloseState.asObservable();
  // private url = 'http://localhost:8080/movies';

  // httpOptions: { headers: HttpHeaders } = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  constructor() {} // private errorHandlerService: ErrorService // private http: HttpClient,

  sendEditMovie(data: Movie) {
    this.editMovieData.next(data);
  }

  sendCloseModalState(state: boolean) {
    this.modalCloseState.next(state);
  }
  /* NODEJS-MYSQL */
  // fetchAll(): Observable<Movie[]> {
  //   return this.http
  //     .get<Movie[]>(this.url, { responseType: 'json' })
  //     .pipe(
  //       catchError(
  //         this.errorHandlerService.handleError<Movie[]>('fetchAll', [])
  //       )
  //     );
  // }

  // createPost(
  //   movie: Partial<Movie>,
  //   _userId: Pick<User, 'id'>
  // ): Observable<Movie> {
  //   return this.http
  //     .post<Movie>(
  //       this.url,
  //       {
  //         imgURL: movie.imgURL,
  //         title: movie.title,
  //         description: movie.description,
  //         director: movie.director,
  //         casts: movie.casts,
  //         release_date: movie.release_date,
  //         rating: movie.rating,
  //         date_created: movie.date_created,
  //       },
  //       this.httpOptions
  //     )
  //     .pipe(
  //       catchError(this.errorHandlerService.handleError<Movie>('createPost'))
  //     );
  // }

  // update(movie: Movie): Observable<any> {
  //   return this.http
  //     .put<Movie>(this.url, movie, this.httpOptions)
  //     .pipe(catchError(this.errorHandlerService.handleError<any>('update')));
  // }

  // deletePost(postId: Pick<Movie, 'id'>): Observable<{}> {
  //   return this.http
  //     .delete<Movie>(`${this.url}/${postId}`, this.httpOptions)
  //     .pipe(
  //       first(),
  //       catchError(this.errorHandlerService.handleError<Movie>('deletePost'))
  //     );
  // }
}
