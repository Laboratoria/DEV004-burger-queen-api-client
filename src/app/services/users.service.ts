import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserInfo(email: string): Observable<any>{
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get("http://localhost:8080/users/{uid}", { headers: header })
  }
}
