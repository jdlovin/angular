import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent implements OnInit {

  public isDisabled = false;
  public image = 'https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png';

  constructor() { }

  ngOnInit(): void {
  }

}
