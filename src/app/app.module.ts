import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home/HomeModule';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule
   ],
  exports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
