import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  private moviesCollection!: AngularFirestoreCollection<Movie>;
  myForm!: FormGroup;
  // Form state
  loading = false;
  success = false;
  movies$!: Observable<Movie[]>;

  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private afs: AngularFirestore,
    private route: Router
  ) {
    this.moviesCollection = this.afs.collection<Movie>('movies');
    this.movies$ = this.moviesCollection.valueChanges();
  }

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

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    console.log(formValue);
    this.moviesCollection
      .add(formValue)
      .then(() => {
        alert('Successfully Added!');
      })
      .catch((err) => {
        alert(`Error: ${err}`);
      });
    this.loading = false;
    this.route.navigateByUrl('/');
  }
}
