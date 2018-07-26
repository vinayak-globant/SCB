import { DashboardAPIService } from "./dashboard/dashboard.api.service";
import { AuthNService } from "./auth/serivces/authn.service";
import { AuthInterceptor } from "./auth/interceptor/auth.interceptor";
import { SessionService } from "./auth/serivces/session.service";
import { APIUtilityService } from "./utility/api.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthRedirectComponent } from "./auth-redirect/auth-redirect.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

// primeng modules
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    AuthRedirectComponent
  ],
  imports: [BrowserModule, APP_ROUTES, HttpClientModule, ButtonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    SessionService,
    APIUtilityService,
    AuthNService,
    DashboardAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
