import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/core/cart-service/cart-service.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit, OnDestroy{

  actSub: Subscription = new Subscription;
  user: string = '';

  constructor(
    private cartService: CartService,
  ) {
    this.actSub = this.cartService.getUserName.subscribe(value => {
      this.user = value;
    });
   }

  ngOnInit(): void {
  }

  getUserName() : string {
    return this.user;
  }

  ngOnDestroy(): void {
      this.actSub.unsubscribe();
  }

}
