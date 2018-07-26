import { getTestBed } from "@angular/core/testing";
import { DashboardAPIService } from "./dashboard.api.service";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "./../auth/serivces/session.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private http: HttpClient,
    private api: DashboardAPIService
  ) {}

  ngOnInit() {
    if (!this.sessionService.isStorageExists()) {
      this.router.navigate(["/home"]);
    }
    this.api.getTestData("params").subscribe(
      (data: any) => {
        // success path
      },
      error => {
        // error path
        console.log(error);
      }
    );
  }
}
