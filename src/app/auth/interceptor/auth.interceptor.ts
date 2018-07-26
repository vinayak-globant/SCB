import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";

import { AuthNService } from "./../serivces/authn.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public injector: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const auth = this.injector.get(AuthNService);
    const authToken = auth.getAuthorizationToken();
    const authHeader = "Bearer " + authToken;

    const authheaders = new HttpHeaders()
      .set("X-Authorization", "Bearer " + authToken)
      // .set("Authorization", "Basic ZXhsOmV4bHNlY3JldA==")
      .set("Content-Type", "application/json");
    console.log("test");
    const authReq = req.clone({
      headers: authheaders
    });
    return next.handle(authReq);
    // .catch(res => {
    //   if (res.status === 404 || res.status === 500 || res.status === 503) {
    //     return Observable.throw(this.error);
    //   } else if (res.status === 401 || res.status === 403) {
    //     auth.onAuthFailure();
    //   } else {
    //     return Observable.throw(res);
    //   }
    // });
  }
}
