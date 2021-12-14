import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { AuthGuardService } from './core/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details', component: DetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'wishList', component: WishListComponent},
  { path:'checkout', component: CheckoutComponent},
  { path:'account-detail', component: AccountDetailComponent},
  // { path: 'details', canActivate: [AuthGuardService], component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
