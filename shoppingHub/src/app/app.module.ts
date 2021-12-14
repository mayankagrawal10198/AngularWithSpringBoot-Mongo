import { environment } from './../environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';

import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavComponent } from './components/dashboard/top-nav/top-nav.component';
import { CartComponent } from './components/cart/cart.component';
import { from } from 'rxjs';

//store
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { UserState } from './shared/store/state/user.state';
import { ProductState } from './shared/store/state/cart-item.state';
import { HttpInterceptorService } from './core/http-interceptor/http-interceptor.service';
import { DetailsComponent } from './components/details/details.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { FavoriteState } from './shared/store/state/favorite-item.state';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopNavComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    CartComponent,
    WishListComponent,
    CheckoutComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    SharedModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot(
      [
        UserState,
        ProductState,
        FavoriteState,
      ],
      {
        developmentMode: !environment.production,
      }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: true,
    }),
    //NgIdleKeepaliveModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
