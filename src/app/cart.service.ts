import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
    console.log('adding product ', product);
    console.log('new cart ', this.getItems());
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  constructor() { }
}