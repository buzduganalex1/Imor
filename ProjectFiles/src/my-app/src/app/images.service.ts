import { Injectable } from '@angular/core';
import { Tag } from './Tag';
import { Image } from './Image';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { 
  }

  getImages(): Observable<Image[]>{
    return this.http.get<Image[]>("http://localhost:52676/api/images/")
  }

  getImageByUri(uri: string){
    return this.http.get<Image>("http://localhost:52676/api/images/byUri?imageUri=http%3A%2F%2Fwww.semanticweb.org%2FImagesOntology%23CatImage")
  }
}
