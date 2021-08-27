import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  template: `
  
  <img src="https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png" />
  
  <img [src]="image" />

  <img src={{image}} />
  <br>
  <button disabled>Button</button>
  <button disabled="{{isDisabled}}"> Button - inter</button>
  <button [disabled]="isDisabled" > Button - prop</button>
  
  
  
  
  `,
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent implements OnInit {

  public isDisabled = false;
  public image = 'https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png';

  constructor() { }

  ngOnInit(): void {
  }

}
