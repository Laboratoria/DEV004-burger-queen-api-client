import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthCurrentUserService } from '../services/auth-current-user.service';
import { Product } from '../interfaces/product';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {
  
  products: Array<Product> = [{
    id: 0,
    dateEntry: '',
    image: '',
    name: '',
    price: 0,
    type: ''
  }]

  filteredItems: Product[] = []

  btnActive: string = '';

  constructor(
    public showProducts: ProductsService,
    private logout: AuthCurrentUserService,
    private storage: StorageService,
  ) {  }

  email = this.storage.getEmailUser();
  role = this.storage.getRoleUser();

  showBreakfastItems(type: string){
    this.btnActive = type;
    this.showProducts.getProducts().subscribe((data)=>{
      this.products = data;
      this.filteredItems = this.products.filter((eachProduct)=>{
        return eachProduct.type === type;
      })
    })
  }
 
  logOut(){
    this.logout.logout();
  }

  
}