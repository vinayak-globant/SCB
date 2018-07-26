import { SessionService } from "./../auth/serivces/session.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth-redirect",
  templateUrl: "./auth-redirect.component.html"
})
export class AuthRedirectComponent implements OnInit {
  constructor(private router: Router, private sessionService: SessionService) {}

  ngOnInit() {
    try {
      const accessToken = this.router.url
        .split("#")[1]
        .trim()
        .substring(13);
      this.sessionService.set(
        this.sessionService.sessionKeys.ACCESS_TOKEN,
        accessToken
      );
      this.router.navigate(["/dashboard"]);
    } catch (error) {
      console.log("Invalid token", error);
      this.router.navigate(["/home"]);
    }
  }
}
