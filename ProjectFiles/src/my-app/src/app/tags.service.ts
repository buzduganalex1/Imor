import { Injectable } from '@angular/core';
import { Tag } from './Tag';
import { Image } from './Image';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { 

  }

  public getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>("http://localhost:52676/api/tags/all")
  }
}
