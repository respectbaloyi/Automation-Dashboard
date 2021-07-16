import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuccComponent } from './mucc/mucc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { EasytraceComponent } from './easytrace/easytrace.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SalesportalComponent } from './salesportal/salesportal.component'
import { MerchantonlineComponent } from './merchantonline/merchantonline.component';
import { CardonlineComponent } from './cardonline/cardonline.component';
import { CorporatecardComponent } from './corporatecard/corporatecard.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "mucc", component: MuccComponent },
  { path: "customerview", component: CustomerviewComponent },
  { path: "easytrace", component: EasytraceComponent },
  { path: "navigator", component: NavigatorComponent },
  { path: "salesportal", component: SalesportalComponent },
  { path: "merchantonline", component: MerchantonlineComponent },
  { path: "cardonline", component: CardonlineComponent },
  { path: "corporatecard", component: CorporatecardComponent },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  MuccComponent,
  CustomerviewComponent,
  EasytraceComponent,
  NavigatorComponent,
  SalesportalComponent,
  MerchantonlineComponent,
  CardonlineComponent,
  CorporatecardComponent
];