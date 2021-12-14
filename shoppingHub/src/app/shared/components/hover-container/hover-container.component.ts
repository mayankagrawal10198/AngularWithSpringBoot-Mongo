import { User } from './../../store/interfaces/user.model';
import { Observable, Subscription } from 'rxjs';
import { UserState } from './../../store/state/user.state';
import { CartService } from './../../../core/cart-service/cart-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';

@Component ({
    selector: 'app-hover-container',
    templateUrl: 'hover-container.component.html',
    styleUrls: ['hover-container.component.scss']
})

export class HoverContainer implements OnInit , OnDestroy{

    // @Select(UserState.getUsers)
    // users$!: Observable<User>;
    actSub: Subscription = new Subscription;
    user: string = '';
    constructor(
        private cartService: CartService,
        private router: Router,
        private activatedRoute: ActivatedRoute, 
    ) { 
        this.actSub = this.cartService.getUserName.subscribe(value => {
            this.user = value;
        });
    }
    
    ngOnInit(): void {
    
    }

    goToNavigation(str: string): void {
        if(str === 'acct') {
            this.router.navigate(['./account-detail'],{ relativeTo: this.activatedRoute.parent });
        }
        else {
            this.router.navigate(['./login'],{ relativeTo: this.activatedRoute.parent });
        }
    }

    getUserName() : string {
        return this.user;
    }

    ngOnDestroy(): void {
        this.actSub.unsubscribe();
    }
}