import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from '../../../services/shop-service.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { StarIconComponent } from "../../../icons/star-icon/star-icon.component";
import { Product } from '../../../interfaces/product';
import { CartItemsService } from '../../../services/cart-items.service';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [NgFor, NgIf, HeaderComponent, StarIconComponent]
})
export class ProductComponent implements OnInit {
  
  product:any = [];
  id:any;
  cartItem:Product[] = [];

  constructor(
    private shopserviceService:ShopServiceService,
    private activatedRoute: ActivatedRoute,
    private cartItems:CartItemsService
  ){}

  ngOnInit() {
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
   this.getProduct(this.id);
  }

  getProduct(id: number){
    this.shopserviceService.getProduct(id).subscribe((data:any) => {
      this.product = data;
      console.log(this.product);
    });
  }
  
  addCart(product:Product) {
    this.cartItems.addCartItem(product);
  }

}
