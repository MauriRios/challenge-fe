import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from '../models/balance.model';
import { Day } from '../models/day.model';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  
  constructor(
    private http: HttpClient
    ) { }

    getDays(): Observable<Day[]>  {
      return this.http.get<Day[]>("https://dbchallenge.onrender.com/" + 'days');
    }

    getBalances(): Observable<Balance[]> {
      return this.http.get<Balance[]>("https://dbchallenge.onrender.com/" + 'balance1');
    }


}
