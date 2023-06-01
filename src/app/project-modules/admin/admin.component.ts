import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  name = "Angular Toggle Show Hide";
  showMyContainer: boolean = false;

  isSideBarOpen: boolean = true;
  statusLink: boolean = false;
  screenWidth: any;
  toggleButton: any
  content:any
  sidebar:any
  constructor(){
  }

//   this.toggleButton = document.getElementById('toggleButton');
//  this.content = document.querySelector('.content');
  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event) {
  //   this.screenWidth = window.innerWidth;
  //   if(this.screenWidth<1000){
  //   this.status=true
  //   console.log("this.status",this.status)
  //   }
   
  // }
  clickEvent() {
    this.isSideBarOpen = !this.isSideBarOpen;
  
  }

 

// this.toggleButton.addEventListener('click', function() {
//    this.sidebar = document.querySelector('.sidebar');
  
//   if (this.sidebar.style.width === '0px') {
//     sidebar.style.width = '250px';
//     content.classList.remove('full-width');
//   } else {
//     sidebar.style.width = '0';
//     content.classList.add('full-width');
//   }
// });
}
