import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuthFormModule} from "./auth-form/auth-form.module";
import {AuthFormComponent} from "./auth-form/auth-form.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
