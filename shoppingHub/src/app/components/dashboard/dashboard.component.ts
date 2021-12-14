import { productDetails } from './../../shared/store/interfaces/cart-item.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';
import { CartService } from 'src/app/core/cart-service/cart-service.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    dashboardProd: productDetails[] = [];
    menu = true;
    titles: string[] = ["DEALS OF THE DAY","BIGGEST DEALS ON TOP BRANDS","EXPLORE TOP BRANDS","TRENDING IN WESTERN WEAR","TRENDING IN INDIAN WEAR","TRENDING IN SPORTS WEAR","TRENDING IN FOOTWEAR","TRENDING IN ACCESSORIES"];
    constructor (
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private cartService: CartService,
    ) {
        
    }
    ngOnInit(): void {
        this.getDetails();
    }

    // @ViewChild('nav') slider: NgImageSliderComponent;
    imageObject : Array<object> = [ {image: 'https://via.placeholder.com/220x240',
                     thumbImage: 'https://via.placeholder.com/220x240',
                     title: 'Image title',
                    },
                    {image: 'https://via.placeholder.com/220x240',
                     thumbImage: 'https://via.placeholder.com/220x240',
                     title: 'Image title',
                    },
                    {image: 'https://via.placeholder.com/220x240',
                     thumbImage: 'https://via.placeholder.com/220x240',
                     title: 'Image title',
                    },
                    {image: 'https://via.placeholder.com/220x240',
                     thumbImage: 'https://via.placeholder.com/220x240',
                     title: 'Image title',
                    },     
                  ];

    // prevImageClick() {
    //     this.slider.prev();
    // }
    
    // nextImageClick() {
    //     this.slider.next();
    // }
    
    toggleMenu() {
        this.menu = !this.menu;
    }

    clickEvent(prod:productDetails): void {
        this.cartService.getDetail.next(prod);
        this.router.navigate(['./details'],{ relativeTo: this.activatedRoute.parent });
    }
    
    getDetails() {
        this.cartService.getDashboardDetails().subscribe((response) => {
        this.dashboardProd = response.slice();
        });
    }
}
