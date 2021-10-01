import { Injectable } from '@angular/core';

// RXJS
import { BehaviorSubject } from 'rxjs';

// MODELS
import { Movie } from '../../shared/models/movie';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // BUTTON SERVICE TO ADD SCHEDULE FROM COURSE.TS 👉 DATETIME-FORM.TS
  private callMovie = new BehaviorSubject<Movie>({});
  movie = this.callMovie.asObservable();
  movies: Movie[] = [
    // Create movie object with id, title, description, director, casts, release date, rating.
    {
      id: 1,
      imgURL: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
      title: 'Star Wars: The Last Jedi',
      description:
        'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
      director: 'Rian Johnson',
      casts: ['Daisy Ridley', 'John Boyega', 'Mark Hamill', 'Carrie Fisher'],
      release_date: 2017,
      rating: 8.7,
      date_created: new Date().getTime(),
    },
    {
      id: 2,
      imgURL: 'https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
      title: 'Justice League',
      description:
        "Fueled by her restored faith in humanity and inspired by Superman's (Henry Cavill) selfless act, Diana Prince returns to thedc to confront an assassination attempt on the Justice League Team rocketed into her life.",
      director: 'Zack Snyder',
      casts: [
        'Henry Cavill',
        'Ben Affleck',
        'Gal Gadot',
        'Amy Adams',
        'Jesse Eisenberg',
        'Ray Fisher',
        'Jason Momoa',
        'Sebastian Stan',
      ],
      release_date: 2017,
      rating: 6.6,
      date_created: new Date().getTime(),
    },
    {
      id: 3,
      imgURL: 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      title: 'The Hunger Games: Mockingjay - Part 1',
      description:
        'Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.',
      director: 'Francis Lawrence',
      casts: [
        'Jennifer Lawrence',
        'Josh Hutcherson',
        'Liam Hemsworth',
        'Woody Harrelson',
        'Elizabeth Banks',
        'Katherine Heigl',
        'Mary McDonnell',
        'Seth Rogen',
        'Stan Lee',
      ],
      release_date: 2014,
      rating: 7.2,
      date_created: new Date().getTime(),
    },
    {
      id: 4,
      imgURL: 'https://image.tmdb.org/t/p/w500/d4KNaTrltq6bpkFS01pYtyXa09m.jpg',
      title: 'The Hunger Games: Mockingjay - Part 2',
      description:
        'The continuation of the saga, as former District 13 tribute Marks Edgecomb, is now a target for the Capitol.',
      director: 'Francis Lawrence',
      casts: [
        'Jennifer Lawrence',
        'Josh Hutcherson',
        'Liam Hemsworth',
        'Woody Harrelson',
        'Elizabeth Banks',
        'Katherine Heigl',
        'Mary McDonnell',
        'Seth Rogen',
        'Stan Lee',
      ],
      release_date: 2016,
      rating: 6.4,
      date_created: new Date().getTime(),
    },
    {
      id: 5,
      imgURL: 'https://image.tmdb.org/t/p/w500/gj282Pniaa78ZJfbaixyLXnXEDI.jpg',
      title: 'The Hobbit: The Desolation of Smaug',
      description:
        'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.',
      director: 'Peter Jackson',
      casts: [
        'Martin Freeman',
        'Ian McKellen',
        'Richard Armitage',
        'Ian Holm',
        'Richard Harris',
        'Ken Stott',
        'John Rhys-Davies',
        'Ian Holm',
        'Richard Harris',
      ],
      release_date: 2013,
      rating: 7.8,
      date_created: new Date().getTime(),
    },
    {
      id: 6,
      imgURL: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
      title: 'The Hobbit: The Battle of the Five Armies',
      description:
        'Mere seconds after the events of The Desolation of Smaug, Bilbo and the dwarves continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.',
      director: 'Peter Jackson',
      casts: [
        'Martin Freeman',
        'Ian McKellen',
        'Richard Armitage',
        'Ian Holm',
        'Richard Harris',
        'Ken Stott',
        'John Rhys-Davies',
        'Ian Holm',
        'Richard Harris',
      ],
      release_date: 2014,
      rating: 6.7,
      date_created: new Date().getTime(),
    },
    {
      id: 7,
      imgURL: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
      title: 'Star Wars: The Last Jedi',
      description:
        'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
      director: 'Rian Johnson',
      casts: ['Daisy Ridley', 'John Boyega', 'Mark Hamill', 'Carrie Fisher'],
      release_date: 2017,
      rating: 8.7,
      date_created: new Date().getTime(),
    },
    {
      id: 8,
      imgURL: 'https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
      title: 'Justice League',
      description:
        "Fueled by her restored faith in humanity and inspired by Superman's (Henry Cavill) selfless act, Diana Prince returns to thedc to confront an assassination attempt on the Justice League Team rocketed into her life.",
      director: 'Zack Snyder',
      casts: [
        'Henry Cavill',
        'Ben Affleck',
        'Gal Gadot',
        'Amy Adams',
        'Jesse Eisenberg',
        'Ray Fisher',
        'Jason Momoa',
        'Sebastian Stan',
      ],
      release_date: 2017,
      rating: 6.6,
      date_created: new Date().getTime(),
    },
  ];

  getMovie(movie_id: number) {
    // find movie by id
    let selected_movie = this.movies.find((movie) => movie.id === movie_id);
    return this.callMovie.next(selected_movie!);
  }
  // 
}
