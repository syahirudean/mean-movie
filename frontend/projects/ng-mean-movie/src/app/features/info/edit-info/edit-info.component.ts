import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
})
export class EditInfoComponent implements OnInit {
  @Input() movie?: Movie;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submit');
  }
}
