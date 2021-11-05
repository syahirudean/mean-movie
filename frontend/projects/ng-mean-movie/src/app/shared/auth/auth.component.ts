import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ConfirmPasswordValidatorDirective } from '../directives/confirm-password-validator.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  signupForm!: FormGroup;
  loginDetails = {
    email: null,
    password: null,
  };

  // Form state
  loading = false;
  submitted = false;
  signupState = false;

  constructor(public auth: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
            Validators.minLength(8),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [
          ConfirmPasswordValidatorDirective.match(
            'password',
            'confirmPassword'
          ),
        ],
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.signupState = false;
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  onSignup() {
    this.signupState = true;
  }

  // // SIGNIN (TODO: CREATE UI)
  // signIn(): void {
  //   this.auth
  //     .signup({
  //       admin: true,
  //       email: 'test@mail.com',
  //       password: '123345678',
  //     })
  //     .subscribe((msg) => console.log(msg));
  // }

  // // LOGIN
  // login(): void {
  //   this.auth
  //     .login(this.loginForm.value.email, this.loginForm.value.password)
  //     .subscribe((msg) => {
  //       console.log(msg);
  //       this.auth.authModal(false);
  //     });
  // }
}
