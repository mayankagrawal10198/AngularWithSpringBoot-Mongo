import { cartItemInterface } from './../../shared/store/interfaces/cart-item.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import * as _ from 'lodash';
import { CartService } from 'src/app/core/cart-service/cart-service.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    menuOptions = [
        'MEN',
        'WOMEN',
        'KIDS',
        'HOME&LIVING',
        'OFFERS'
    ]
    hover = true;
    prod: Observable<cartItemInterface[]>;
    products: cartItemInterface[] = [];

    constructor (
        private store: Store,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private cartService: CartService,
    ) {
        this.prod= this.store.select(state => state.products.products);
    }
    ngOnInit(): void {
        this.getDetails();
    }
    
    onHover() {
        this.hover = !this.hover;
    }

    navigateToCart(state: string) {
        if(state === 'wish') {
            this.router.navigate(['./wishList'],{ relativeTo: this.activatedRoute.parent });
        }
        else if(state === 'bag') {
            this.router.navigate(['./cart'],{ relativeTo: this.activatedRoute.parent });
        }
        else {
            this.router.navigate(['./dashboard'],{ relativeTo: this.activatedRoute.parent });
        }
    }
    getDetails() {
        this.prod = this.store.select(state => state.products.products);
        this.prod.subscribe((value)=> {
          this.products= _.cloneDeep(value);
        });
    }
}