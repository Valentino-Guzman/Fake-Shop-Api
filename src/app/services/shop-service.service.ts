import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  constructor(private httpClient:HttpClient) { }

  APIurl = 'https://fakestoreapi.com/';

  getProducts(): Observable<Product> {
    return this.httpClient.get<Product>(`${this.APIurl}products`);
  }

  getCategories(category:string): Observable<string> {
    return this.httpClient.get<string>(`${this.APIurl}products/category/${category}`);
  }

  getProduct(id:number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.APIurl}products/${id}`);
  }
    
}
