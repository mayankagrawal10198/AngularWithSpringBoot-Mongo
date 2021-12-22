import {
  cartItemInterface,
  productDetails,
} from './../../shared/store/interfaces/cart-item.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  prod: productDetails = {
    basic: {
      productName: '',
      productID: '',
      productCount: 0,
      productPrice: 0,
      isFavorite: false,
    },
    description: '',
    rating: 0,
  };
  getTotalPrice = new BehaviorSubject<number>(0);
  getUserDetails = new BehaviorSubject<object>({
    name: 'userName',
    email: 'user123@xxx.com',
  });
  getDetail = new BehaviorSubject<productDetails>(this.prod);
  //getTotalPrice = new EventEmitter<number>();
  dashboard: productDetails[] = [
    {
      basic: {
        productName: 'Padded Elite jacket',
        productID: 'AAAAA',
        productCount: 2,
        productPrice: 200,
        isFavorite: false,
      },
      description: 'Universal fitness jacket you can wear every day',
      rating: 3.5,
    },
    {
      basic: {
        productName: 'Slim Fit Flat-Front Trousers',
        productID: 'BBBBB',
        productCount: 2,
        productPrice: 20,
        isFavorite: false,
      },
      description: 'Try once and you will never forget',
      rating: 1,
    },
    {
      basic: {
        productName: 'Printed Hooded Sweatshirt',
        productID: 'CCCCC',
        productCount: 2,
        productPrice: 180,
        isFavorite: false,
      },
      description: 'Long sleeves, printed and regular',
      rating: 1,
    },
  ];
  products: cartItemInterface[] = [
    {
      productName: 'Jeans',
      productID: '12345',
      productCount: 2,
      productPrice: 20,
      isFavorite: false,
    },
    {
      productName: 'Shirt',
      productID: '54321',
      productCount: 3,
      productPrice: 30,
      isFavorite: true,
    },
  ];
  favorites: cartItemInterface[] = [
    {
      productName: 'Shorts',
      productID: '1234',
      productCount: 1,
      productPrice: 20,
      isFavorite: true,
    },
    {
      productName: 'Shirt',
      productID: '54321',
      productCount: 3,
      productPrice: 30,
      isFavorite: true,
    },
  ];
  constructor() {}

  getCartProducts(): Observable<cartItemInterface[]> {
    const cartIntervalObservable = new Observable<cartItemInterface[]>(
      (observer) => {
        observer.next(this.products);
        // observer.complete();
        // observer.error(new Error('Count is greater 3!'));
      }
    );
    return cartIntervalObservable;
  }

  getFavorites(): Observable<cartItemInterface[]> {
    const favIntervalObservable = new Observable<cartItemInterface[]>(
      (observer) => {
        observer.next(this.favorites);
        // observer.complete();
        // observer.error(new Error('Count is greater 3!'));
      }
    );
    return favIntervalObservable;
  }

  getDashboardDetails(): Observable<productDetails[]> {
    const dashboardObservable = new Observable<productDetails[]>((observer) => {
      observer.next(this.dashboard);
      // observer.complete();
      // observer.error(new Error('Count is greater 3!'));
    });
    return dashboardObservable;
  }
}
