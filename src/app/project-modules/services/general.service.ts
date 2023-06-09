import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  unreadMessage = new BehaviorSubject(null)
  constructor(private router: Router,
    private apiService: ApiService) { }





    get getToken() {
        if (localStorage.getItem('intezToken')) {
          return localStorage.getItem('intezToken')
        }
        else {
          return null
        }
      }
    
 
  logOut() {
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
