import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  components = [
    'comp1',
    'comp2',
    'comp3',
    'comp4',
    'comp5',
    'comp6',
    'comp7',
    'comp8',
    'comp9',
    'comp10'
  ];

  constructor() { }
}
