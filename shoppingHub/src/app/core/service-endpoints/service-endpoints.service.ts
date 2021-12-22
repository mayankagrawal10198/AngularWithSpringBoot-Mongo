import { Res, User } from './../../shared/store/interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceEndpointsService {
  constructor(private http: HttpClient) {}

  storeData(postData: User, endpnt: string) {
    return this.http.post<{ any: any }>(endpnt, postData, {
      observe: 'response',
    });
  }
  storePic(postData: FormData, endpnt: string) {
    return this.http.post<{ any: any }>(endpnt, postData, {
      observe: 'response',
    });
  }
}
