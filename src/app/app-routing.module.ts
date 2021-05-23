import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchInfoComponent } from './batch-info/batch-info.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarEventComponent } from './calendar-event/calendar-event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchesComponent } from './batches/batches.component';
import { NoOfBatchesComponent } from './no-of-batches/no-of-batches.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:"batch-details",component:BatchDetailsComponent},
  {path:"batch-info",component:BatchInfoComponent},
  {path:"calendar",component:CalendarComponent},
  {path:"calendar-event",component:CalendarEventComponent},
  {path :"dashboard",component:DashboardComponent},
  {path:"batches",component:BatchesComponent},
  {path:"no-of-batches",component:NoOfBatchesComponent},
  {path:"studentdetails",component:StudentDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
