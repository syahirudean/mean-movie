import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

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
    // try {
    //   //TODO: hook to backend
    //   console.log(formValue);
    //   this.success = true;
    // } catch (err) {
    //   console.error(err);
    // }

    this.loading = false;
  }
}
