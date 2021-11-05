import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';

// VENDOR
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthComponent } from './auth/auth.component';
import { ConfirmPasswordValidatorDirective } from './directives/confirm-password-validator.directive';

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  CarouselModule.forRoot(),
  ModalModule.forRoot(),
];
const components: any = [HeaderComponent, AuthComponent];

@NgModule({
  declarations: [...components, ConfirmPasswordValidatorDirective],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
