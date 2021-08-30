import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  players = [
    {number: 9, name: "Saurez", gender: "Male", salary: 9000, dateOfBirth: '12/23/1987'},
    {number: 10, name: "Lemar", gender: "Male", salary: 9000, dateOfBirth: '12/23/1987'},
    {number: 7, name: "Joao", gender: "Male", salary: 9000, dateOfBirth: '12/23/1987'},
    {number: 14, name: "Llorente", gender: "Male", salary: 9000, dateOfBirth: '12/23/1987'},
    {number: 8, name: "Lady", gender: "Female", salary: 9000, dateOfBirth: '12/23/1987'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
