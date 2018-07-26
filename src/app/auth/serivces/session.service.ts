import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class SessionService {
  // TODO: Create constant as per application standard
  readonly sessionKeys = {
    ACCESS_TOKEN: "accessToken"
  };

  private session: Map<string, any> = new Map<string, any>();

  constructor() {}

  set(key: string, value: any): void {
    this.session.set(key, value);
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return this.session.get(key);
  }

  flush(): void {
    this.session.clear();
    localStorage.clear();
  }

  isStorageExists(): boolean {
    const isValidStorage =
      localStorage.getItem(this.sessionKeys.ACCESS_TOKEN) != null || undefined;
    return isValidStorage;
  }
}
