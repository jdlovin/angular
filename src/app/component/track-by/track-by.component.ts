import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent implements OnInit {

  public players: any[] = [];

  constructor() {
    this.players = [
      { id: 1, name: 'Trippier', position: 'RB/RWB'},
      { id: 2, name: 'Lemar', position: 'LM'},
      { id: 3, name: 'Koke', position: 'CM/CDM'},
      { id: 4, name: 'Saul', position: 'CM'}
    ]
  }

  ngOnInit(): void {
  }

  onButtonClicked(){
    this.players = [
      { id: 1, name: 'Trippier', position: 'RB/RWB'},
      { id: 2, name: 'Lemar', position: 'LM'},
      { id: 3, name: 'Koke', position: 'CM/CDM'},
      { id: 4, name: 'Saul', position: 'CM'},
      { id: 5, name: 'Correa', position: 'ST/RM'}
    ]
  }

  trackById(player: any){
return player.id;
  }
}
