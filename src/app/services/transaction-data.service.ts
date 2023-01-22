import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction-data.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {
  
  constructor( 
    private http: HttpClient
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>("https://dbchallenge.onrender.com/" + 'transactions');
  }

}
