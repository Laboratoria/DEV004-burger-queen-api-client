import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(user:any): Observable<any>{
    return this.http.get("https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/users", user)
  }
}
