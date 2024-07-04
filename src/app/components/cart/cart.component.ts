import { Component, OnInit} from '@angular/core';
import { Product } from '../../interfaces/product';
import { NgFor, NgIf } from '@angular/common';
import { CartItemsService } from '../../services/cart-items.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  

  constructor(private carditems:CartItemsService) {}

  ngOnInit() {
    this.cartItems = this.carditems.getCartItems();
  }

  removeItem(productId: number) {
    this.carditems.removeCartItem(productId);
    this.cartItems = this.carditems.getCartItems();
  }
}
