import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sideOpenEvent = new EventEmitter<boolean>();
  @Input()
  isSidebarOpened: any;

  constructor(){

  }
  ngOnChanges(): void {
    console.log("this.isSidebarOpened",this.isSidebarOpened)
  }
}
