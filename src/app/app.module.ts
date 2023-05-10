import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import '@bootstrap/dist/css/bootstrap.min.css';
// import '@bootstrap/dist/js/bootstrap.min.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
