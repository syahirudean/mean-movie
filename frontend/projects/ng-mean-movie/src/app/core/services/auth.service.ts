import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//MODELS
import { User } from '../../shared/models/user';

// RXJS
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map, catchError, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/auth';
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId!: Pick<User, 'id'>;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // AUTH MODAL
  private authSource = new BehaviorSubject(false);
  currentAuthSource = this.authSource.asObservable();

  constructor(
    private http: HttpClient,
    private errorFlag: ErrorService,
    private router: Router
  ) {}

  async authModal(state: boolean) {
    this.authSource.next(state);
  }

  // SIGNUP API
  signup(user: Omit<User, 'id'>): Observable<User> {
    console.log(user);
    return this.http
      .post<User>(`${this.url}`, user, this.httpOptions)
      .pipe(first(), catchError(this.errorFlag.handleError<User>('signup')));
  }

  // LOGIN API
  login(
    email: Pick<User, 'email'>,
    password: Pick<User, 'password'>
  ): Observable<{
    token: string;
    userId: Pick<User, 'id'>;
  }> {
    return this.http
      .post<any>(`${this.url}/login`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, 'id'> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem('token', tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(['movies']);
        }),
        catchError(
          this.errorFlag.handleError<{
            token: string;
            userId: Pick<User, 'id'>;
          }>('login')
        )
      );
  }
}
