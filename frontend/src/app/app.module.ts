import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ViewAllTripsComponent } from './view-all-trips/view-all-trips.component';
import { ViewIndividualTripComponent } from './view-individual-trip/view-individual-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LogInComponent,
    CreateAccountComponent,
    DashboardComponent,
    CreateTripComponent,
    ViewAllTripsComponent,
    ViewIndividualTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
