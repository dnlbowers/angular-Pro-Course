import {
  Component,
  AfterViewInit,
  EventEmitter,
  Output,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChildren, ChangeDetectorRef, ElementRef, ViewChild
} from '@angular/core';
import {User} from "./auth-form.interface";
import {AuthRememberComponent} from "./auth-remember.component";
import {AuthMessageComponent} from "./auth-message.component";

@Component({
  selector: 'auth-form',
  styles: [`
    .email { border-color: #9f72e6;}
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
        <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `,
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage!: boolean;
  @ViewChild('email') email: ElementRef | null= null
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent> | null = null;
  @ContentChildren(AuthRememberComponent) remember!: QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.email?.nativeElement.setAttribute('placeholder', 'Enter your email');
    this.email?.nativeElement.classList.add('email');
    this.email?.nativeElement.focus();
    if(this.message) {
      this.message?.forEach((message) => {
          message.days = 30
      })
    this.cd.detectChanges()
    }
  }

  ngAfterContentInit() {
    if(this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked)
      })
    }
}
  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
