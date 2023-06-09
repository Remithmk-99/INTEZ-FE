import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeButton: number =1;
  @Output() sideOpenEvent = new EventEmitter<boolean>();
  @Input()
  isSidebarOpened: any;

  menuItems: any[] = [
    {
      index:1,
      path: '/user/home',
      title: 'Home',
      icon: '../../../../../assets/icons/home.svg'
    },
    {
      index:2,
      path: '/user/timesheet-dashboard',
      title: 'Timesheet',
      icon: '../../../../../assets/icons/timesheetinactive.svg'
    },
    {
      index:3,
      path: '/user/home',
      title: 'ActivityFeed',
      icon: '/assets/icons/activityfeed.svg'
    },
    {
      index:4,
      path: '/user/home',
      title: 'Assignments',
      icon: '../../../../../assets/icons/assignments.svg'
    },
    {
      index:5,
      path: '/user/home',
      title: 'Events',
      icon: '../../../../../assets/icons/events.svg'
    },
    {
      index:6,
      path: '/user/home',
      title: 'Settings',
      icon: '../../../../../assets/icons/settings.svg'
    }
  ];


constructor(
   private router:Router
){
  console.log("this.isSidebarOpened",this.isSidebarOpened)
}
 

  onToggle() {
    this.isSidebarOpened = !this.isSidebarOpened;
    this.sideOpenEvent.emit(this.isSidebarOpened);
    // console.log("this.isTitileShow",this.isTitle)
  //   if( this.isSidebarOpened){
  //     setTimeout(()=>{
  //       this.isTitle = true;
  //     },400)
  //   }
  //   else{
  //     this.isTitle = false;
  //   }
  //  console.log("this.isSidebarOpened",this.isSidebarOpened,this.isTitle)
  }
  

  activateButton(index:number,path:string) {
    this.activeButton = index;
    this.router.navigateByUrl(path)
  }
}
