import { productDetails } from './../../shared/store/interfaces/cart-item.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';
import { CartService } from 'src/app/core/cart-service/cart-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    arrows: true,
    speed: 400,
  };
  dashboardProd: productDetails[] | null = [];
  menu = true;
  titles: string[] = [
    'DEALS OF THE DAY',
    'BIGGEST DEALS ON TOP BRANDS',
    'EXPLORE TOP BRANDS',
    'TRENDING IN WESTERN WEAR',
    'TRENDING IN INDIAN WEAR',
    'TRENDING IN SPORTS WEAR',
    'TRENDING IN FOOTWEAR',
    'TRENDING IN ACCESSORIES',
  ];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.getDetails();
  }

  // @ViewChild('nav') slider: NgImageSliderComponent;
  //   imageObject: Array<object> = [
  //     {
  //       image: 'https://via.placeholder.com/220x240',
  //       thumbImage: 'https://via.placeholder.com/220x240',
  //       title: 'Image title',
  //     },
  //     {
  //       image: 'https://via.placeholder.com/220x240',
  //       thumbImage: 'https://via.placeholder.com/220x240',
  //       title: 'Image title',
  //     },
  //     {
  //       image: 'https://via.placeholder.com/220x240',
  //       thumbImage: 'https://via.placeholder.com/220x240',
  //       title: 'Image title',
  //     },
  //     {
  //       image: 'https://via.placeholder.com/220x240',
  //       thumbImage: 'https://via.placeholder.com/220x240',
  //       title: 'Image title',
  //     },
  //   ];

  // prevImageClick() {
  //     this.slider.prev();
  // }

  // nextImageClick() {
  //     this.slider.next();
  // }

  toggleMenu() {
    this.menu = !this.menu;
  }

  clickEvent(prod: productDetails): void {
    this.cartService.getDetail.next(prod);
    this.router.navigate(['./details'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  getDetails() {
    this.http
      .get<productDetails[] | null>('http://localhost:8080/getAllItems', {
        observe: 'response',
      })
      .subscribe((response) => {
        console.log(response);
        this.dashboardProd = response.body;
      });
  }
}
