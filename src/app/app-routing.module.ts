import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './order/dashboard/dashboard.component';
import { ParcelGuard } from './order/parcel-details/guard/parcel.guard';
import { ParcelDetailsComponent } from './order/parcel-details/parcel-details.component';
import { ErrorComponent } from './shared/error/error.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'log_in', component: LoginComponent },

  { path: 'parcel_details', component: ParcelDetailsComponent, canActivate: [ParcelGuard,AuthGuard] },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
