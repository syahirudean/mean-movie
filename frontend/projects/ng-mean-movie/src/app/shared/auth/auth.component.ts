import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  // SIGNIN (TODO: CREATE UI)
  signIn(): void {
    this.auth
      .signup({
        admin: true,
        email: 'test@mail.com',
        password: '123345678',
      })
      .subscribe((msg) => console.log(msg));
  }

  // LOGIN
  login(): void {
    this.auth
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((msg) => {
        console.log(msg);
        this.auth.authModal(false);
      });
  }
}
