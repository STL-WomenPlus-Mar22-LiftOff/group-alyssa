import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ViewAllTripsComponent } from './view-all-trips/view-all-trips.component';
import { TripComponent } from './trip/trip.component';
import { AuthGuardService } from './auth-guard-service';
import { AuthenticationService } from './authentication.service';



const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'login', component: LogInComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'user', component: UserComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'create-trip', component: CreateTripComponent, canActivate: [AuthGuardService]},
  { path: 'view-all-trips', component: ViewAllTripsComponent, canActivate: [AuthGuardService]},
  { path: 'trip', component: TripComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
