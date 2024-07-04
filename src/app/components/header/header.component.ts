import { Component, OnInit } from '@angular/core';
import { CartComponent } from "../cart/cart.component";
import { CartIconComponent } from "../../icons/cart-icon/cart-icon.component";
import { MatDialog } from '@angular/material/dialog';
import { ShopServiceService } from '../../services/shop-service.service';
import { CartItemsService } from '../../services/cart-items.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CartComponent, CartIconComponent]
})
export class HeaderComponent {

    cartItems: any[] = [];

    constructor(private matdialog:MatDialog) {}
    
    showCart() {
        this.matdialog.open(CartComponent, {
          width: '500px',
          height: '450px',
        });
      }
   
}
