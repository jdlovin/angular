import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-if',
  templateUrl: './what-if.component.html',
  styleUrls: ['./what-if.component.css']
})
export class WhatIfComponent implements OnInit {

  public display = false;
  public isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

}
