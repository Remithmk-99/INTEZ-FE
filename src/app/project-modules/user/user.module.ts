import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from '../user/components/user-profile/user-profile.component';
// import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TimesheetDashboardComponent } from './components/timesheet-dashboard/timesheet-dashboard.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserProfileComponent, HomeComponent, TimesheetDashboardComponent, ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
