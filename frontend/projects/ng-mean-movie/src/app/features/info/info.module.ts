import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './info-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InfoComponent } from './info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';

@NgModule({
  declarations: [InfoComponent, EditInfoComponent],
  imports: [CommonModule, InfoRoutingModule, SharedModule],
})
export class InfoModule {}
