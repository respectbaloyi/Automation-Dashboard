import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MuccComponent } from './mucc/mucc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerviewComponent } from './customerview/customerview.component';
import { EasytraceComponent } from './easytrace/easytrace.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SalesportalComponent } from './salesportal/salesportal.component';
import { MerchantonlineComponent } from './merchantonline/merchantonline.component';
import { CardonlineComponent } from './cardonline/cardonline.component';
import { CorporatecardComponent } from './corporatecard/corporatecard.component'

@NgModule({
  declarations: [
    AppComponent,
    MuccComponent,
    DashboardComponent,
    CustomerviewComponent,
    EasytraceComponent,
    NavigatorComponent,
    SalesportalComponent,
    MerchantonlineComponent,
    CardonlineComponent,
    CorporatecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
