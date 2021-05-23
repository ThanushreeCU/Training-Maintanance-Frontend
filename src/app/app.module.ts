import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

// date-picker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HighchartsChartModule } from 'highcharts-angular';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartModule } from 'angular-highcharts';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchInfoComponent } from './batch-info/batch-info.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchesComponent } from './batches/batches.component';
import { NoOfBatchesComponent } from './no-of-batches/no-of-batches.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BatchDetailsComponent,
    BatchInfoComponent,
    FooterComponent,
    CalendarComponent,
    CalendarEventComponent,
    JwPaginationComponent,
    DashboardComponent,
    BatchesComponent,
    NoOfBatchesComponent,
    StudentDetailsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HighchartsChartModule,
    ChartModule,
    GoogleChartsModule.forRoot(),
    FusionChartsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
