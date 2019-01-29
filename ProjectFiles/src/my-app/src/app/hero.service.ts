import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  messageServiceVariable: MessageService;

  constructor(private messageService: MessageService, private http: HttpClient) {
    this.messageServiceVariable = messageService;
  }

  getHeroes(): Observable<Hero[]> {
    this.messageServiceVariable.add("HeroService: fetched heroes");
    
    return this.http.get<Hero[]>("http://localhost:52676/api/tags/all")

    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {

    this.messageService.add(`HeroService: fetched hero id=${id}`);
    
    return of(HEROES.find(hero => hero.id === id));
  }
}
