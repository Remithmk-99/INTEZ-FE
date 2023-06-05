import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // user: SocialUser | any;
  // loggedIn: boolean |any;
  
  constructor(
    private router:Router,
    // private authService: SocialAuthService, 
  ){
    
  }

  ngOnInit(): void {
      
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(" this.user", this.user,this.loggedIn);
    // });
  }

  login(){
    this.router.navigate(['user']);
  }
  googleSignIn(){
  //   console.log("this.user")
  //   this.authService.signIn('180688556478-gppfet8ghbp58l75lfnbg7beru2v0um0.apps.googleusercontent.com').then((userData) => {
  //     // You can access the user data returned by Google here
  //     console.log("userData",userData);
  //   });
  }
}
