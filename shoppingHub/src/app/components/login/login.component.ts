import { ServiceEndpointsService } from './../../core/service-endpoints/service-endpoints.service';
import { UserState } from './../../shared/store/state/user.state';
import { User } from './../../shared/store/interfaces/user.model';
import { AddUser } from './../../shared/store/actions/user.action';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

//store
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/core/cart-service/cart-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  icon_status: string = 'sentiment_satisfied';
  signup: boolean = false;
  minLength: number = 8;
  maxLength: number = 20;
  checkboxStatus: boolean = false;
  showPasswordValidation: boolean = false;
  minLengthCheck: boolean = false;
  capitalCharCheck: boolean = false;
  smallCharCheck: boolean = false;
  numCheck: boolean = false;
  specialCharCheck: boolean = false;
  validPassword: boolean = false;
  passwordValidation: string = '';
  // @Select(UserState.getUsers) users$: Observable<User>
  users: Observable<User>;
  error: string = '';
  errorSub: Subscription = new Subscription();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private http: HttpClient,
    private serviceEndpointsService: ServiceEndpointsService,
    private cartService: CartService
  ) {
    this.users = this.store.select((state) => state.users.users);
  }

  ngOnInit(): void {
    this.errorSub = this.serviceEndpointsService.error.subscribe(
      (errorMessage) => {
        this.error = errorMessage;
      }
    );
  }

  onSubmit(form: NgForm) {
    //form.reset();
    this.router.navigate(['./dashboard'], {
      relativeTo: this.activatedRoute.parent,
    });
    this.addUser(form.value.email, form.value.user, form.value.pass);
    if (this.signup) {
      this.onCreatePost(form.value.email, form.value.user, form.value.pass);
    } else {
      //AuthService
    }
    console.log(this.users);
  }

  signUp() {
    this.signup = !this.signup;
  }

  addUser(email: string, name: string, pass: string) {
    this.store.dispatch(new AddUser({ name, email, pass }));
    this.cartService.getUserName.next(name);
  }

  checkboxClicked(status: boolean) {
    this.checkboxStatus = status;
  }

  onCreatePost(email: string, name: string, pass: string) {
    const postData: User = { name: name, email: email, pass: pass };
    const endpnt: string = 'http://localhost:8080/';
    this.serviceEndpointsService.storeData(postData, endpnt);
  }

  newPasswordValidityCheck(passCheck: string) {
    this.minLengthCheck = passCheck.length >= this.minLength;
    this.capitalCharCheck = /[A-Z]/.test(passCheck);
    this.smallCharCheck = /[a-z]/.test(passCheck);
    this.numCheck = /[0-9]/.test(passCheck);
    this.specialCharCheck = /[@#$%\^]/.test(passCheck);
    this.validPassword =
      this.minLengthCheck &&
      this.capitalCharCheck &&
      this.smallCharCheck &&
      this.numCheck &&
      this.specialCharCheck;
    console.log(this.validPassword);
  }

  showPasswordValidationPopup() {
    this.showPasswordValidation = true;
  }

  hidePasswordValidationPopup() {
    this.showPasswordValidation = false;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
