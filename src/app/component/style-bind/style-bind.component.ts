import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.css']
})
export class StyleBindComponent implements OnInit {

  hasError = true;
  specialColor = '#999'
  public customStyle = {
    color: 'blue',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
