import { RemoveProduct, AddProduct } from './../../shared/store/actions/cart-item.action';
import { ProductState } from './../../shared/store/state/cart-item.state';
import { CartService } from './../../core/cart-service/cart-service.service';
import { RemoveFavorite, UpdateFavorite } from './../../shared/store/actions/favorite-item.action';
import { cartItemInterface } from './../../shared/store/interfaces/cart-item.model';
import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { UpdateProduct } from 'src/app/shared/store/actions/cart-item.action';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  numberOfItems: number[] = [];
  favorites: cartItemInterface[] = [];
  fav: Observable<cartItemInterface[]>;
  products: cartItemInterface[] = [];
  prod: Observable<cartItemInterface[]>;

 // @Select(ProductState.getProducts) products$: Observable<cartItemInterface[]>;

  constructor(
    private store: Store,
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,   
  ) {
    this.fav= this.store.select(state => state.favorites.favorites);
    this.prod= this.store.select(state => state.products.products);
   }

  ngOnInit(): void {
      this.getDetails(); 
  }
  toggle(index: number) {
      this.favorites[index].isFavorite = !this.favorites[index].isFavorite ;
      this.products.forEach(product => {
        if(product.productID === this.favorites[index].productID) {
          product.isFavorite = !product.isFavorite;
        }
      });
      this.store.dispatch(new UpdateProduct(this.products))
      if(!this.favorites[index].isFavorite) {
        this.store.dispatch(new RemoveFavorite(this.favorites[index].productID));
      }
      alert("Product removed from Wishlist");
  }
  addProduct(index: number,prodID: string) {
    this.products.forEach(product => {
      if(product.productID === prodID) {
        this.store.dispatch(new RemoveProduct(this.favorites[index].productID));
        alert("Product already in the cart");
      }
    });
    this.store.dispatch(new AddProduct(this.favorites[index]));
  }
  getDetails() {
      this.fav = this.store.select(state => state.favorites.favorites);
      this.fav.subscribe((value)=> {
        this.favorites= _.cloneDeep(value);
      });
      this.prod = this.store.select(state => state.products.products);
      this.prod.subscribe((value)=> {
        this.products= _.cloneDeep(value);
      });
  }
  navigate(str:string) {
    if(str === 'shopping') {
      this.router.navigate(['./dashboard'],{ relativeTo: this.activatedRoute.parent });
    }
    else if(str === 'checkout') {
      //this.router.navigate(['./details'],{ relativeTo: this.activatedRoute.parent });
    }
    else {
      //
    }
  }

}
