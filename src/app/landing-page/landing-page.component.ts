import { APIUtilityService } from "./../utility/api.service";
import { environment } from "./../../environments/environment.prod";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  authServerUrl: string;
  constructor(private apiUtilityService: APIUtilityService) {}

  ngOnInit() {
    this.authServerUrl = `${
      environment.AuthServerUrl
    }&redirect_uri=${this.apiUtilityService.getAppBaseUrl()}/auth`;
  }
}
