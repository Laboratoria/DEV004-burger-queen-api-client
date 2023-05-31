import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private http: HttpClient) {  }
  login(user: any): Observable<any>{
    return this.http.post("https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/login", user)
  }
}
