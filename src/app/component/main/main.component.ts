import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  
  <h1>This is just a test</h1>
  <h1> {{firstName}} </h1>
  <h1> {{'Welcome ' + firstName}}</h1>
  
  
  
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public firstName = "Jamarcus";
  public message = "Hi! I'm Paul";

  greetUser(){
    return 'Hi! ' + this.firstName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
