import {Component, OnInit} from '@angular/core';
import { ShopServiceService } from '../../services/shop-service.service';
import { Product } from '../../interfaces/product';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CartItemsService } from '../../services/cart-items.service';
import { CartIconComponent } from "../../icons/cart-icon/cart-icon.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [NgFor, MatButtonModule, CartIconComponent, HeaderComponent]
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  cartItem:Product[] = [];
  category: string = '';


  constructor(private shopserviceService:ShopServiceService, private cartItems:CartItemsService) {}

  ngOnInit() {
   this.getProducts();
  }

  getProducts() {
    this.shopserviceService.getProducts().subscribe((data:any) => {
      this.products = data;
    });
  }

  addCart(product:Product) {
    this.cartItems.addCartItem(product);
  }

  filterCategory(category:string){
    this.shopserviceService.getCategories(category).subscribe((data:any) => {
      this.products = data; 
    });
  }

}
