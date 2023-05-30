import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  openSidebar: boolean = true;

  menuSidebar = [
  
   {
      link_name: "Setting",
      link: "/setting",
      icon: "bx bx-cog",
      sub_menu: []
    },
    {
      link_name: "Setting",
      link: "/setting",
      icon: "bx bx-cog",
      sub_menu: []
    }
  ]

  constructor() { }

  ngOnInit() {

  }

  sidebarStatus() {
    this.openSidebar=!this.openSidebar
  }


}


