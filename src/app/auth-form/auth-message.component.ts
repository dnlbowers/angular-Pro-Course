import { Component } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: `
    <div>
      you will be logged in for {{ days }} days
    </div>
  `,
  styles: [
  ]
})
export class AuthMessageComponent {
  days: number = 7;
}
