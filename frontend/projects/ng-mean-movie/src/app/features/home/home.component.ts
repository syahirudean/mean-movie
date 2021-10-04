import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';
import { Movie } from '../../shared/models/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  constructor(public data: DataService) {}

  ngOnInit(): void {}
}
