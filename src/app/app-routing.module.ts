import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import { CheckoutComponent } from './views/checkout/checkout.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  {
    path: 'cart', component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
