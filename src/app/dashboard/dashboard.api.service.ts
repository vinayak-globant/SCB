import { environment } from "./../../environments/environment";
import { animate } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable()
export class DashboardAPIService {
  constructor(private http: HttpClient) {}

  getTestData(params: string): Observable<any> {
    const annuityURL = `${environment.APIEndPoints}/assets/config.json`;
    return this.http.get<any>(annuityURL);
  }
}
