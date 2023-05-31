import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get("https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/products")
  }
}
