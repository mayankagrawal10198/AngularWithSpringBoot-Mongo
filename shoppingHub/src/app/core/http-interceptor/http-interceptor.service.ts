import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Authorization', 'Basic ');
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    httpHeaders = httpHeaders.append('Access-Control-Allow-Origin', '*');
    httpHeaders = httpHeaders.append(
      'Access-Control-Allow-Credentials',
      'true'
    );
    httpHeaders = httpHeaders.append(
      'Access-Control-Allow-Methods',
      'GET,HEAD,OPTIONS,POST,PUT'
    );
    httpHeaders = httpHeaders.append(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );
    const modifiedRequest = req.clone({
      headers: httpHeaders,
    });
    return next.handle(modifiedRequest);
  }
}
