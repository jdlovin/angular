import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  constructor() { }

  name = 'Tony Hawk';
  message = 'This is tony hawk';
  person = {
    firstName: 'Tony',
    lastName: 'Hawk'
  }

  currentDate = new Date();

}
