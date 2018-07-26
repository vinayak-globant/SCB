import { Injectable } from "@angular/core";

@Injectable()
export class APIUtilityService {
  getAppBaseUrl(): string {
    return location.origin;
  }
}
