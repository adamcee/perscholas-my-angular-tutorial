import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService,
  ) { }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your Product has been added to the cart!');
  }

  ngOnInit() {
  }

}