import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { AuthService } from './auth.service';


/*

  Auth token interceptor

*/
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  auth;
  inj;

  constructor(inj: Injector)
  {

    this.inj = inj;

  }

  /*

    Assign token to headers

  */
  intercept(req: HttpRequest<any>, next: HttpHandler)
  {

    // ensure auth service
    if (!this.auth) {
      this.auth = this.inj.get(AuthService);
    }

    const t = this.auth.getAuthorizationToken();

    // attach token if present
    if (t) {
      const authReq = req.clone({ setHeaders: { Authorization: `jwt ${t}` } });
      return next.handle(authReq);
    }

    return next.handle(req);


  }

}