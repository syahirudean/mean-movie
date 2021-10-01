import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  myForm!: FormGroup;
  // Form state
  loading = false;
  success = false;
  movies$!: Observable<Movie[]>;

  constructor(private fb: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      imgURL: '',
      title: '',
      description: '',
      director: '',
      casts: this.fb.array([]),
      release_date: 0,
      rating: 0,
      date_created: new Date().getTime(),
    });
  }
  get castForms() {
    return this.myForm.get('casts') as FormArray;
  }

  addCast() {
    const cast = this.fb.group({
      name: [],
    });

    this.castForms.push(cast);
  }

  deleteCast(i: number) {
    this.castForms.removeAt(i);
  }

  fetchAll(): Observable<Movie[]> {
    return this.data.fetchAll();
  }

  post(movieDetails: Movie): void {
    console.log(movieDetails);
    if (!movieDetails) return;

    this.movies$ = this.data
      .post(movieDetails)
      .pipe(tap(() => (this.movies$ = this.fetchAll())));
  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;
    this.post(formValue);

    this.loading = false;
  }
}
