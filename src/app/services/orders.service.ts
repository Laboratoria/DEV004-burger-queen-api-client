import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
body!: Order[]

  constructor(private http: HttpClient,
    ) { }

    getOrders(){
      return this.http.get('http://localhost:8080/orders')
    }

    postOrder(){
      return this.http.post('http://localhost:8080/orders', this.body)
    }

    
}
