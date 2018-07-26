import { AuthRedirectComponent } from "./auth-redirect/auth-redirect.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { RouterModule, CanActivate } from "@angular/router";
//import {AuthGuard} from './auth/guards/auth.guard';

const routes = [
  { path: "home", component: LandingPageComponent },
  { path: "auth", component: AuthRedirectComponent },
  { path: "dashboard", component: DashboardComponent },
  // {path: 'home', loadChildren: './home/home.module#HomeModule'},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // otherwise redirect to home
  { path: "**", redirectTo: "/dashboard" }
];

export const APP_ROUTES = RouterModule.forRoot(routes);
