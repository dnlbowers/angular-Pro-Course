import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {AuthFormComponent} from "./auth-form.component";
import {AuthRememberComponent} from "./auth-remember.component";
import { AuthMessageComponent } from './auth-message.component';

@NgModule({
  declarations: [
    AuthRememberComponent,
    AuthFormComponent,
    AuthMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent,
  ],
})
export class AuthFormModule { }
