import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Button } from '../models/menu-button.model';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor(
    private http: HttpClient
  ) { }

  getButtonsUser(): Observable<Button[]>  {
    return this.http.get<Button[]>("https://dbchallenge.onrender.com/" + 'buttonsUser');
  }

  getButtonsAccount(): Observable<Button[]> {
    return this.http.get<Button[]>("https://dbchallenge.onrender.com/" + 'buttonsAccount');
  }
  

}
