import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 

  @Output() sideOpenEvent = new EventEmitter<boolean>();
  @Input()
  isSidebarOpened: any;

  menuItems: any[] = [
    {
      path: '/user/home',
      title: 'Home',
      icon: '../../../../../assets/icons/homeactive.svg'
    },
    {
      path: '/user/home',
      title: 'Timesheet',
      icon: '../../../../../assets/icons/timesheetinactive.svg'
    },
    {
      path: '/user/home',
      title: 'Activity Feed',
      icon: '/assets/icons/activityfeed.svg'
    },
    {
      path: '/user/home',
      title: 'Assignments',
      icon: '../../../../../assets/icons/homeactive.svg'
    },
    {
      path: '/user/home',
      title: 'Events',
      icon: '../../../../../assets/icons/timesheetinactive.svg'
    },
    {
      path: '/user/home',
      title: 'Settings',
      icon: '/assets/icons/activityfeed.svg'
    }
  ];


constructor(){
  console.log("this.isSidebarOpened",this.isSidebarOpened)
}
 

  onToggle() {
    this.isSidebarOpened = !this.isSidebarOpened;
    this.sideOpenEvent.emit(this.isSidebarOpened);
  }
}
