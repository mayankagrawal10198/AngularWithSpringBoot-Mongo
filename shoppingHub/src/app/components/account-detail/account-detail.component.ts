import { Observable, Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CartService } from 'src/app/core/cart-service/cart-service.service';
import { FormControl, NgForm } from '@angular/forms';
import { ServiceEndpointsService } from 'src/app/core/service-endpoints/service-endpoints.service';
import { Store } from '@ngxs/store';
import { UserDetails } from 'src/app/shared/store/interfaces/user.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  actSub: Subscription = new Subscription();
  user: Observable<UserDetails>;
  userDetails: UserDetails = { name: '', email: '' };
  constructor(
    private cartService: CartService,
    private store: Store,
    private serviceEndpointsService: ServiceEndpointsService
  ) {
    this.user = this.store.select((state) => state.users.details);
    this.user.subscribe((value) => {
      this.userDetails = Object.assign({}, value);
    });
    console.log(this.userDetails);
  }

  ngOnInit(): void {}

  // onSubmit(form: NgForm, e:Event) {
  //   console.log(form.value.userPic.file);
  //   let formData = new FormData();
  //   formData.set('userPic', form.value.userPic.file);
  //   console.log(formData);
  //   this.serviceEndpointsService
  //     .storePic(formData, 'http://localhost:8080/updateUserPic/ma@mail.com')
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //         // document
  //         //   .getElementById('pic')
  //         //   ?.setAttribute('src', 'data:image/png;base64,' + data.message);
  //       },
  //       (error) => {
  //         alert(error);
  //       }
  //     );
  // }

  uploadPic(event: any) {
    console.log(event);
    const file: File = event.target.files[0];
    if (file) {
      let fileName = file.name;

      const formData = new FormData();

      formData.append('userPic', file, fileName);
      console.log(formData);

      this.serviceEndpointsService
        .storePic(
          formData,
          'http://localhost:8080/updateUserPic/ma@gmail.com' //+this.getUserEmail()
        )
        .subscribe(
          (data) => {
            console.log(data);
            document
              .getElementById('pic')
              ?.setAttribute(
                'src',
                `data:image/png;base64,${data.body?.message}`
              );
          },
          (error) => {
            alert(error);
          }
        );
    }
  }

  getUserName(): string {
    return this.userDetails.name;
  }

  getUserEmail(): string {
    return this.userDetails.email;
  }

  ngOnDestroy(): void {
    this.actSub.unsubscribe();
  }
}
