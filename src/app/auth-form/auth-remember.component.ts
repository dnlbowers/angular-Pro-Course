import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event)">
      Keep me logged in
    </label>
  `,
  styles: [
  ]
})
export class AuthRememberComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(event: Event) {
    const checkbox = (event?.target as HTMLInputElement)?.checked;
    if (checkbox !== undefined) {
      this.checked.emit(checkbox);
    }
  }
}
