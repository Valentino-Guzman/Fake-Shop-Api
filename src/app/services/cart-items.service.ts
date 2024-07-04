import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  cartItems:Product[] = [];

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addCartItem(product:Product) {
    this.cartItems.push(product);
  }

  removeCartItem(productId:number): void {
  this.cartItems = this.cartItems.filter(product => product.id !== productId)

  }
}
