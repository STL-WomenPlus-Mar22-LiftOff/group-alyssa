import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { ViewAllTripsComponent } from './view-all-trips/view-all-trips.component';
import { ViewIndividualTripComponent } from './view-individual-trip/view-individual-trip.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'login', component: LogInComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'create-trip', component: CreateTripComponent},
  { path: 'view-all', component: ViewAllTripsComponent},
  { path: 'view-individual', component: ViewIndividualTripComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
