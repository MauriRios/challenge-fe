import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Balance } from '../models/balance.model';

@Injectable({
  providedIn: 'root'
})
export class BalanceDataService {

  constructor( 
    private http: HttpClient 
    ) { }

    getBalance(): Observable<Balance>  {
      return this.http.get<Balance>("https://dbchallenge.onrender.com/" + 'balance');
  }

}
