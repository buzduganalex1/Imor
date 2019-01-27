import { Component, OnInit, NgModule } from '@angular/core';

import {HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  
  constructor(private httpClient:HttpClient) {}

  ngOnInit(){
   var results = this.httpClient.get<any>("http://localhost:52676/api/values").subscribe();

    console.log(results);
  }
}
