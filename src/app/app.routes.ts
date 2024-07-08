import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/products/product-details/product.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'products/:id', component: ProductComponent, pathMatch: 'full'},
];
