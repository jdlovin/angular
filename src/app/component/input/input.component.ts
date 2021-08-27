import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public message = 'Hello Guest';

  public comment = '';

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(){
    console.log('He touched the butt')
    this.message = "Good morning";
  }

  onChange(){
    this.message = "Change is happening"
  }

  onGetValue(input: any){
    console.log(input)
  }

  onKeyUp(data: any){
    this.comment = data;
    console.log();
    if (data.length > 140){
      console.log("This is pretty long")
    } else {
      console.log("Keep going")
    }
  }


}
