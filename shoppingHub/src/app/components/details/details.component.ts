import { AddFavorite } from './../../shared/store/actions/favorite-item.action';
import { AddProduct } from './../../shared/store/actions/cart-item.action';
import { Store } from '@ngxs/store';
import { cartItemInterface } from './../../shared/store/interfaces/cart-item.model';
import { CartService } from './../../core/cart-service/cart-service.service';
import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { productDetails } from 'src/app/shared/store/interfaces/cart-item.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  prod: productDetails = {
    itemId: '',
    name: '',
    shortDesc: '',
    longDesc: '',
    dimensions: '',
    brand: '',
    tags: [],
    price: 0,
    pics: [],
  };
  favorites: cartItemInterface[] = [];
  favorites$: Observable<cartItemInterface[]>;
  products: cartItemInterface[] = [];
  products$: Observable<cartItemInterface[]>;
  actSub: Subscription = new Subscription();
  constructor(private cartService: CartService, private store: Store) {
    this.actSub = this.cartService.getDetail.subscribe((value) => {
      this.prod = value;
    });
    this.favorites$ = this.store.select((state) => state.favorites.favorites);
    this.products$ = this.store.select((state) => state.products.products);
  }

  ngOnInit(): void {
    console.log(this.prod);
  }

  getDetails(str: string): string | number {
    let value: string | number = 'Unavailable';
    switch (str) {
      case 'prodName':
        return this.prod.name;
        break;
      case 'prodDesc':
        return this.prod.shortDesc;
        break;
      case 'rating':
        return this.prod.brand;
        break;
      case 'price':
        return this.prod.price;
        break;
      default:
        return value;
    }
  }

  // addToCart() {
  //   this.store.dispatch(new AddProduct(this.getProdBasic()));
  //   alert("Product added in the cart");
  // }
  // addToWish() {
  //   this.prod.basic.isFavorite = true;
  //   this.store.dispatch(new AddFavorite(this.getProdBasic()));
  //   alert("Product added in the Wishlist");
  // }

  // getProdBasic(): cartItemInterface {
  //   return this.prod.basic;
  // }

  ngOnDestroy(): void {
    this.actSub.unsubscribe();
  }
}
