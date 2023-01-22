import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor(
    private http: HttpClient
  ) { }

  getCards(): Observable<Card[]>  {
    return this.http.get<Card[]>("https://dbchallenge.onrender.com/" + 'card');
  }
  
}
