import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthCurrentUserService } from '../services/auth-current-user.service';
import { Product } from '../interfaces/product';
import { ProductToOrder } from '../interfaces/product-to-order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../services/orders.service';


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
  selectedProduct!: ProductToOrder;
  orderItems: ProductToOrder[] = [];
  btnActive: string = '';
  orderForm!: FormGroup;
  orderPrice!: number;

  constructor(
    public showProducts: ProductsService,
    private logout: AuthCurrentUserService,
    public orders: OrdersService,
  ) {

  }

  showSelectedItems(type: string) {
    this.btnActive = type;
    this.showProducts.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredItems = this.products.filter((eachProduct) => {
        return eachProduct.type === type;
      })
    })
  }

  calculateTotal() {
    this.orderPrice = 0;
    for (let i = 0; i < this.orderItems.length; i++) {
      this.orderPrice += this.orderItems[i].priceProduct
    }
  }

  findProductById = (id: number): ProductToOrder | undefined => {
    return this.orderItems.find((productToOrder: { product: { id: number; }; }) => productToOrder.product.id === id);
  }

  addToOrder(product: Product) {
    const existingProduct = this.findProductById(product.id);
    if (existingProduct) {
      existingProduct.qty++;
      existingProduct.priceProduct += product.price;
    } else {
      this.orderItems.push({
        qty: 1,
        product: product,
        priceProduct: product.price
      });
    }
    this.calculateTotal()
  }

  logOut() {
    this.logout.logout();
  }


}