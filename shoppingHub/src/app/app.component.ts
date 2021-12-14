import { Component, OnInit} from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartService } from './core/cart-service/cart-service.service';
import { UpdateProduct } from './shared/store/actions/cart-item.action';
import { UpdateFavorite} from './shared/store/actions/favorite-item.action';
import { cartItemInterface} from './shared/store/interfaces/cart-item.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'openBankUI';
  products: cartItemInterface[] = [];
  favorites: cartItemInterface[] = [];
  constructor(
    private store: Store,
    private cartService: CartService,
  ) {

   }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.cartService.getCartProducts().subscribe((response) => {
      this.store.dispatch(new UpdateProduct(response));
      this.products = response.slice();
      console.log(this.products);
    });
    this.cartService.getFavorites().subscribe((response) => {
      this.store.dispatch(new UpdateFavorite(response));
      this.favorites = response.slice();
      console.log(this.favorites);
    });
  }
}
