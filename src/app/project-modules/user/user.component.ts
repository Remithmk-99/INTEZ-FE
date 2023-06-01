import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  isSidebarOpened: boolean = false;
  scrWidth: any;
  sidebarStatus: string = 'open';
  @HostListener('window:resize', ['$event'])
  getScreenSize(event:any) {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 1120) this.isSidebarOpened = false;
    else this.isSidebarOpened = true;
  }
  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 1120) {
      this.isSidebarOpened = false;
    } else {
      this.isSidebarOpened = true;
    }
  }

  sidebarEvent(value:any) {

    this.isSidebarOpened = value;
  }


}


