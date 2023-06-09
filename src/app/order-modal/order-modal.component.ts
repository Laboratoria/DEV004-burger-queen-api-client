import { Component, Input } from '@angular/core';
import { ProductToOrder } from '../interfaces/product-to-order';
import { StorageService } from '../services/storage.service';
import { Product } from '../interfaces/product';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent {
  @Input() orderList: ProductToOrder[] = [];
  @Input() totalPrice!: number;

  constructor(
    private storage: StorageService,
    private orders: OrdersService,
  ) { }

  userId = this.storage.getIdUser();

  calculateTotal() {
    this.totalPrice = 0;
    for (let i = 0; i < this.orderList.length; i++) {
      this.totalPrice += this.orderList[i].priceProduct
    }
    console.log(this.totalPrice);

  }

  findProductById = (id: number): ProductToOrder | undefined => {
    return this.orderList.find((productToOrder: { product: { id: number; }; }) => productToOrder.product.id === id);
  }

  addProduct(product: ProductToOrder) {
    const existingProduct = this.findProductById(product.product.id);
    if (existingProduct) {
      existingProduct.qty++;
      existingProduct.priceProduct += product.product.price;
    }
    this.calculateTotal()
  }

  deleteProduct(product: ProductToOrder) {
    const existingProduct = this.findProductById(product.product.id);
    if (existingProduct) {
      if (existingProduct.qty === 1) {
        const index = this.orderList.indexOf(product);
        if (index !== -1) {
          this.orderList.splice(index, 1);
        }
      } else {
        existingProduct.qty--;
        existingProduct.priceProduct -= product.product.price;
      }
    }
    this.calculateTotal()
  }

  cancelOrder() {
    this.orderList.splice(0)
  }

  createOrder(customerName: string) {
    console.log(customerName);
    // pending request http to create order
  }


}
