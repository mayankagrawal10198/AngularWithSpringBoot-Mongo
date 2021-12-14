import { cartItemInterface } from './../../shared/store/interfaces/cart-item.model';
import { Store } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/cart-service/cart-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit , OnDestroy {

  totalPrice: number = 0;
  actSub: Subscription = new Subscription;
  
  constructor(
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
  ) {
    this.actSub = this.cartService.getTotalPrice.subscribe(value => {
      this.totalPrice = value;
    });
   }

  ngOnInit(): void {

  }

  getTotalPrice():number {
    return this.totalPrice;
  }

  navigate(str:string) {
    if(str === 'shopping') {
      this.router.navigate(['./dashboard'],{ relativeTo: this.activatedRoute.parent });
    }
    else if(str === 'cart') {
      this.router.navigate(['./cart'],{ relativeTo: this.activatedRoute.parent });
    }
    else {
      this.router.navigate(['./login'],{ relativeTo: this.activatedRoute.parent });
    }
  }

  ngOnDestroy(): void {
    this.actSub.unsubscribe();
  }

}
