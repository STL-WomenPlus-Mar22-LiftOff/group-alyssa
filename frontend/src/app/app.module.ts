import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ViewAllTripsComponent } from './view-all-trips/view-all-trips.component';
import { ViewTripComponent } from './view-trip/view-trip.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { TripComponent } from './trip/trip.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LogInComponent,
    CreateAccountComponent,
    DashboardComponent,
    CreateTripComponent,
    ViewAllTripsComponent,
    ViewTripComponent,
    UserComponent,
    LogoutComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
