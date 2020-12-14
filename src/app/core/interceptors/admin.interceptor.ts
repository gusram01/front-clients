import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
  private getToken(req: HttpRequest<any>): HttpRequest<any> {
    const data = JSON.parse(localStorage.getItem('myClient$T0k3n'));
    if (data) {
      req = req.clone({
        headers: req.headers.set('authorization', `Bearer ${data.token}`),
      });
    }
    return req;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = this.getToken(req);
    return next.handle(req);
  }
}
