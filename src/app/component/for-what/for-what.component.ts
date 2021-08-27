import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-what',
  templateUrl: './for-what.component.html',
  styleUrls: ['./for-what.component.css']
})
export class ForWhatComponent implements OnInit {

  public names = ['Mark', 'Griezmann', 'Cunha', 'Saurez', 'Felix'];

  public players = [
    { id: 1, name: 'Trippier', position: 'RB/RWB'},
    { id: 2, name: 'Lemar', position: 'LM'},
    { id: 3, name: 'Koke', position: 'CM/CDM'},
    { id: 4, name: 'Saul', position: 'CM'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
