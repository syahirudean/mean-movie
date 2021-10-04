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
    {
      id: 1,
      imgURL:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Avengers: Endgame',
      description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      director: 'Anthony Russo, Joe Russo',
      casts:
        'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson',
      release_date: 2019,
      rating: 8.8,
      date_created: Date.now(),
    },
    {
      id: 2,
      imgURL:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Avengers: Infinity War',
      description:
        'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
      director: 'Anthony Russo, Joe Russo',
      casts:
        'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson',
      release_date: 2018,
      rating: 8.8,
      date_created: Date.now(),
    },
    {
      id: 3,
      imgURL:
        'https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Avengers: Age of Ultron',
      description:
        'When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.',
      director: 'Joss Whedon',
      casts:
        'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson',
      release_date: 2015,
      rating: 8.5,
      date_created: Date.now(),
    },
    {
      id: 4,
      imgURL:
        'https://m.media-amazon.com/images/M/MV5BMTQ0ODYzODc0NF5BMl5BanBnXkFtZTgwODk5NzYwOTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Avengers: The Avengers',
      description:
        'Earth’s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
      director: 'Joss Whedon',
      casts:
        'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson',
      release_date: 2012,
      rating: 8.5,
      date_created: Date.now(),
    },
  ];

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorService
  ) {}

  update(grocery: Movie): Observable<any> {
    return this.http
      .put<Movie>(this.privateURL, grocery, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>('update')));
  }
}
