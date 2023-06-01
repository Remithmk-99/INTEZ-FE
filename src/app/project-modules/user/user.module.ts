import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from '../user/components/user-profile/user-profile.component';
// import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserProfileComponent, HomeComponent, ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
