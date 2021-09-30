import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
// import { SharedModule } from '../shared/shared.module';

const modules: any = [BrowserModule, BrowserAnimationsModule, SharedModule];
const components: any = [MainLayoutComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class CoreModule {}
