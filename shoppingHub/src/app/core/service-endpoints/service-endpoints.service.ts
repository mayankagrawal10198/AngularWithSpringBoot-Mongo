import { User } from './../../shared/store/interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceEndpointsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  storeData(postData: User, endpnt: string) {
    this.http.post<{ any: any }>(endpnt, postData).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (error) => {
        this.error.next(error.message);
      }
    );
  }
}
