import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: './app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
})

export class TopNavComponent {
    navItems = [
        'First',
        'Second',
        'Third'
    ];

    constructor(private router: Router) {}

    navDropDown(){
        
    }

    goToNavItem(item: string) {
        this.router.navigate(['/'+item])
    }
}