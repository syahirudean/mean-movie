import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';

// VENDOR
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';

const modules = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  CarouselModule.forRoot(),
  ModalModule.forRoot(),
];
const components: any = [HeaderComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
