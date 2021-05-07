import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product) {
    this.items.push(product);
    console.log('adding product ', product);
    console.log('new cart ', this.getItems());
  }

  clearCart() {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}