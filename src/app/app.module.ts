import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MalevichComponent } from './malevich/malevich.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MalevichComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
