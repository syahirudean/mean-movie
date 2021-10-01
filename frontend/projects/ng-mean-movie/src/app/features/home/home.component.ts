import { Component, OnInit } from '@angular/core';
import { Info } from './../../shared/models/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  info: Info[] = [
    {
      id: 1,
      imgURL:
        'http://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/poster-3_orig.jpg',
      title: 'The Lion King',
      description:
        'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
