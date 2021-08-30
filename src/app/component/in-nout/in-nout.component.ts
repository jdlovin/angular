import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-in-nout',
  templateUrl: './in-nout.component.html',
  styleUrls: ['./in-nout.component.css']
})
export class InNoutComponent implements OnInit {

  @Input()
  childData = '';

  @Output()
  childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.childEvent.emit('Hi from your child')
  }

}
