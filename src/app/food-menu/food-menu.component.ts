import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {
  constructor(
    public products: ProductsService
  ) { }

  get(){
    this.products.getProducts().subscribe((res)=>{
      console.log(res);
      
    })
  }

  
}
