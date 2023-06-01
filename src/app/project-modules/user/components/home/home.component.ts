import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 projects=[{"title":"INTEZ"},{"title":"Zoft Site"},{"title":"OneClick"},{"title":"Bass Phase 2"}]
}
