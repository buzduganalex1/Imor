import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from '../Image';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { encode } from 'punycode';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: Image[];

  constructor(private imageService: ImagesService) 
  {
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => {
      this.images = images
      this.images.forEach(element => {
        console.log(encodeURIComponent(element.uri));
        element.uri = encodeURIComponent(element.uri);
      });
    });
  }

}
