import { ProductState } from './../../shared/store/state/cart-item.state';
import { CartService } from './../../core/cart-service/cart-service.service';
import { RemoveProduct, UpdateProduct } from './../../shared/store/actions/cart-item.action';
import { AddFavorite, RemoveFavorite } from './../../shared/store/actions/favorite-item.action';
import { cartItemInterface } from './../../shared/store/interfaces/cart-item.model';
import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  totalPrice: number = 0;
  numberOfItems: number[] = [];
  products: cartItemInterface[] = [];
  prod: Observable<cartItemInterface[]>;

 // @Select(ProductState.getProducts) products$: Observable<cartItemInterface[]>;

  constructor(
    private store: Store,
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,   
  ) {
      
    this.prod= this.store.select(state => state.products.products);
   }

  ngOnInit(): void {
      this.getDetails();
      this.getTotalPrice();
  }
  removeOne(index:number) {
    if(this.products[index].productCount > 0) {
      this.products[index].productCount = this.products[index].productCount - 1;
      this.store.dispatch(new UpdateProduct(this.products));
      this.getTotalPrice();
    }
  }
  addOne(index:number) {
    this.products[index].productCount = this.products[index].productCount + 1 ;
    this.store.dispatch(new UpdateProduct(this.products));
    this.getTotalPrice();
  }
  toggle(index: number) {
      this.products[index].isFavorite = !this.products[index].isFavorite ;
      this.store.dispatch(new UpdateProduct(this.products));
      if(this.products[index].isFavorite) {
        this.store.dispatch(new AddFavorite(this.products[index]));
        alert("Product added in the Wishlist");
      }
      else if(!this.products[index].isFavorite) {
        this.store.dispatch(new RemoveFavorite(this.products[index].productID));
        alert("Product Removed from the Wishlist");
      }
      else {
        //
      }
  }
  removeProduct(prodID: string) {
    this.store.dispatch(new RemoveProduct(prodID));
    this.getDetails();
    console.log(this.products);
  }
  getDetails() {
      this.prod = this.store.select(state => state.products.products);
      this.prod.subscribe((value)=> {
        this.products= _.cloneDeep(value);
      });
      console.log(this.products);
  }
  getTotalPrice():number {
    this.totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.totalPrice = this.totalPrice + (this.products[i].productCount * this.products[i].productPrice)
    }
    return this.totalPrice;
  }
  navigate(str:string) {
    if(str === 'shopping') {
      this.router.navigate(['./dashboard'],{ relativeTo: this.activatedRoute.parent });
    }
    else if(str === 'checkout') {
      this.cartService.getTotalPrice.next(this.getTotalPrice());
      this.router.navigate(['./checkout'],{ relativeTo: this.activatedRoute.parent });
    }
    else {
      this.router.navigate(['./login'],{ relativeTo: this.activatedRoute.parent });
    }
  }
}
