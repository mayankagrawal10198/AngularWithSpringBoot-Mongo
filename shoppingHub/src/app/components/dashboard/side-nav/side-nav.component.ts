import { Component } from '@angular/core';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent {
    showCategeory = false;
    sections = [
        'CATEGEORIES',
        'BRAND',
        'PRICE',
        'COLOR',
        'DISCOUNT RANGE'
    ]

    categeories = {
        displayAll: false,
        items: [
            'Shirts',
            'Casual',
            'Shoes',
            'Tshirts',
            'Trousers',
            'Jeans',
            'Sweatshirts',
            'Jackets',
            'Sweaters'
        ]
    }

    brands = {
        displayAll: false,
        items: [
        'Roadster',
        'Parx',
        'Blackberrys',
        'Park Avenue',
        'Puma',
        'Mast & Harbour',
        'eCraftIndia',
        'United Colors of Benetton'
    ]
}
    price = {
        displayAll: false,
        items: [
            'Rs. 384 to Rs. 3438',
            'Rs. 3438 to Rs. 6492',
            'Rs. 6492 to Rs. 9546',
            'Rs. 9546 to Rs. 12600'
        ]
    }

    colors = {
        displayAll: false,
        items: [
            'Blue',
            'Navy Blue',
            'White',
            'Black',
            'Grey',
            'Red',
            'Green'
        ]
    }

    discount = {
        displayAll: false,
        items: [
            '10% and above',
            '20% and above',
            '30% and above',
            '40% and above',
            '50% and above',
            '60% and above',
            '70% and above'
        ]
    }
    
    menu = true;

    showmore(section: string) {
        switch(section) {
            case 'categeories': this.categeories.displayAll = true;
                                break;
            case 'brands': this.brands.displayAll = true;
                           break;
            case 'price': this.price.displayAll = true;
                          break;

            case 'color': this.colors.displayAll = true;
                          break;
            case 'discount': this.discount.displayAll = true;
                             break;

        }   
    }

    toggleMenu() {
        this.menu = !this.menu;
    }
}