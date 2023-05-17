import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import '@bootstrap/dist/css/bootstrap.min.css';
// import '@bootstrap/dist/js/bootstrap.min.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './project-modules/shared/shared.module';
// import { LoginComponent } from './project-modules/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
