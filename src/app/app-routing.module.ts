import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


const routes: Routes = [
  { path: 'hotels', component: HotelComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'detail/:name', component: HotelDetailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
