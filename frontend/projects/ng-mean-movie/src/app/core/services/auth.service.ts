import { Injectable } from '@angular/core';

//MODELS
import { User } from '../../shared/models/user';

// RXJS
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userDoc?: AngularFirestoreDocument<User>;
  user$?: Observable<User | null | undefined>;
  loading?: boolean;
  // private url = 'http://localhost:8080/auth';
  // isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  // userId!: Pick<User, 'id'>;

  // httpOptions: { headers: HttpHeaders } = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  // AUTH MODAL
  private authSource = new BehaviorSubject(false);
  currentAuthSource = this.authSource.asObservable();

  // FORM STATUS
  private formState = new BehaviorSubject(false);
  currentFormState = this.formState.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore // private errorFlag: ErrorService, // private http: HttpClient, // private router: Router
  ) {
    // GET THE AUTH STATE, THEN FETCH THE FIRESTORE USER DOCUMENT OR RETURN NULL
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        // USER LOGGED IN
        if (user) {
          this.userDoc = this.afs.doc<User>(`users/${user.uid}`);
          return this.userDoc.valueChanges();
        } else {
          // USER LOGGED OUT
          return of(null);
        }
      })
    );
  }

  // SIGNUP USING EMAIL
  async emailSignUp(signupForm: FormGroup) {
    if (!signupForm.invalid) {
      this.loading = true;
      return (
        this.afAuth
          .createUserWithEmailAndPassword(
            signupForm.value.email,
            signupForm.value.password
          )
          // SUCCESSFUL
          .then((userCredential) => {
            // CREATE INITIAL USER DOC
            this.setUserDoc(userCredential.user, signupForm.value.fullname);
          })
          .catch((err) => {
            // Error
            var errorCode = err.code;
            var errorMessage = '';
            var errorEmailInUse =
              'The email address is already in use by another account.';
            if (errorCode === 'auth/email-already-in-use') {
              errorMessage = errorEmailInUse;
            } else {
              errorMessage = err.message;
            }
            alert(`Uh-oh, an error occurred! ${errorMessage}`);
            console.error(err);
          })
      );
    } else {
      return alert(
        'Hold your horses, it looks like you have some invalid fields.'
      );
    }
  }

  // SIGNIN USING EMAIL
  async emailSignin(email: string | null, password: string | null) {
    if (email || (null && password) || null) {
      this.afAuth
        .signInWithEmailAndPassword(email!, password!)
        .then(() => {
          console.log(`Welcome back`);
          window.location.reload();
        })
        .catch((err) => {
          // Error
          var errorCode = err.code;
          var errorMessage = '';
          var errorEmailInUse =
            'The email address is already in use by another account.';
          if (errorCode === 'auth/user-not-found') {
            alert(
              `Hmm, There is no user record corresponding to this email. The account may have been deleted. If you're new, you can create a account with us.`
            );
          } else if (
            errorCode === 'auth/wrong-password' ||
            errorCode === 'auth/invalid-email'
          ) {
            alert(`Invalid email or password. Please try again...`);
          }
          console.error(err);
          //auth/user-not-found
        });
      this.authSource.next(false);
    } else {
      console.log(`Invalid input...`);
    }
  }

  // SET USER DATA TO FIRESTORE AFTER SUCCESSFUL SIGNUP
  private async setUserDoc(user: any, fullname: string): Promise<void> {
    const userDoc = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      fullname: fullname,
      email: user.email || null,
      admin: true,
    };

    await userDoc.get().toPromise();
    userDoc.set(data, { merge: true });
    this.loading = false;
    alert(`Welcome ${data.fullname}`);
    this.authSource.next(false);
  }

  async authModal(state: boolean) {
    this.authSource.next(state);
  }

  async onChange(state: boolean) {
    this.authSource.next(state);
  }

  onSignOut() {
    this.afAuth
      .signOut()
      .then(() => {
        alert(`See you again...`);
        console.log(`Successfully Signed out...`);
        window.location.reload();
      })
      .catch((err) => {
        alert(`Oops, something went wrong. Please try again later...`);
        console.error(err);
      });
  }

  /* MYSQL */
  // // SIGNUP API
  // signup(user: Omit<User, 'id'>): Observable<User> {
  //   console.log(user);
  //   return this.http
  //     .post<User>(`${this.url}`, user, this.httpOptions)
  //     .pipe(first(), catchError(this.errorFlag.handleError<User>('signup')));
  // }

  // // LOGIN API
  // login(
  //   email: Pick<User, 'email'>,
  //   password: Pick<User, 'password'>
  // ): Observable<{
  //   token: string;
  //   userId: Pick<User, 'id'>;
  // }> {
  //   return this.http
  //     .post<any>(`${this.url}/login`, { email, password }, this.httpOptions)
  //     .pipe(
  //       first(),
  //       tap((tokenObject: { token: string; userId: Pick<User, 'id'> }) => {
  //         this.userId = tokenObject.userId;
  //         localStorage.setItem('token', tokenObject.token);
  //         this.isUserLoggedIn$.next(true);
  //         this.router.navigate(['movies']);
  //       }),
  //       catchError(
  //         this.errorFlag.handleError<{
  //           token: string;
  //           userId: Pick<User, 'id'>;
  //         }>('login')
  //       )
  //     );
  // }
}
