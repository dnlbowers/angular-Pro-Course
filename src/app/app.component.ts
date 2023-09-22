import { Component } from '@angular/core';
import {User} from "./auth-form/auth-form.interface";

@Component({
  selector: 'app-root',
  template: `
    <div>
        <auth-form (submitted)="createUser($event)">
            <h3>Create Account</h3>
          <button type="submit">
            Join us
          </button>
        </auth-form>
        <auth-form (submitted)="loginUser($event)">
            <h3>Login</h3>
            <auth-remember 
                (checked)="rememberUser($event)">
            </auth-remember>
            <button type="submit">
              Login
            </button>
        </auth-form>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'AngularProCourse';

  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember
  }
  createUser(user: User) {
    console.log('Create Account', user);
  }

  loginUser(user: User) {
    console.log('login', user, this.rememberMe);
  }
}
