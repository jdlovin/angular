import { Component, OnInit } from '@angular/core';
import { PhotodataService } from 'src/app/services/photodata.service';
import { IPhoto } from 'src/app/component/photo.model'

@Component({
  selector: 'app-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.css']
})
export class PhotoPostComponent implements OnInit {

  public photos: IPhoto[] = [];

  constructor(private dataService: PhotodataService) {
    this.dataService.getPosts().subscribe(data => this.photos = data)
   }

  ngOnInit(): void {
  }

}
