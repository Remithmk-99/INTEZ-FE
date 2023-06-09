import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from '../user/components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TimesheetDashboardComponent } from './components/timesheet-dashboard/timesheet-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "user-profile",
        component: UserProfileComponent,
      },
      {
        path: "timesheet-dashboard",
        component: TimesheetDashboardComponent,
      },
    
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
