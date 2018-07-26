import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { SessionService } from "./session.service";

@Injectable()
export class AuthNService {
  private lpconfig: Observable<object>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private session: SessionService
  ) {}

  getAuthorizationToken() {
    const accessToken = this.session.get(this.session.sessionKeys.ACCESS_TOKEN);
    return accessToken;
  }

  onAuthFailure() {
    this.session.flush();
    this.router.navigate(["/home"]);
  }
}
